import React, { Component } from 'react';
//React HTML Parser to parse html from strings
//import ReactHtmlParser from 'react-html-parser';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import Navigation from './lib/Navigation';
import * as actions from './actions';

const store = createStore(reducer);
window.store = store;

class App extends Component {
  /* 
  Fetch Wordpress Pages 
  */
  fetchPages = ()=>{
    const projectsURL = "http://localhost/prototype-wp-wiki/wordpress/wp-json/wp/v2/pages";
    fetch(projectsURL).then(res=>res.json()).then((json)=>{
      let newPagesList = [];
      json.forEach((page)=>{
        //create new object per page
        const newPage = [];
        newPage["title"] = page.title.rendered;
        newPage["content"] = page.content.rendered;
        newPage["slug"] = page.slug;
        newPage["description"] = page.excerpt.rendered.replace(/<[^>]+>/g, '');
        newPage["id"] = page.id;
        newPagesList.push(newPage)
      })
      return newPagesList;
    }).then((pages)=>{
      store.dispatch(actions.getPages(pages));
    })
  }
  /* Fetch Wiki Articles */
  //http://localhost/prototype-wp-wiki/wiki/api.php?action=query&list=categorymembers&cmtitle=Category:Pages&format=json
  //http://localhost/prototype-wp-wiki/wiki/api.php?action=parse&format=json&page=Main_Page
  fetchWikiPages = ()=>{
    const wikiUrl = "http://localhost/prototype-wp-wiki/wiki/api.php?action=query&list=categorymembers&cmtitle=Category:Pages&format=json";
    const fetchHeader = {
      mode:'no-cors',
      credentials: 'include',
      headers: {
        "Access-Control-Allow-Credentials": false,
        origin: "http://localhost:3000",
      }
    };
    fetch(wikiUrl, fetchHeader).then((results)=>{
      console.log("WikiPages: ", results)
      
    })
  }
  
  componentDidMount(){
    this.fetchPages(); //fetches WP pages
    this.fetchWikiPages();
  }
  render() {
    return (
        <Provider store={store}>
          <Navigation />
        </Provider>
    );
  }
}

export default App;
