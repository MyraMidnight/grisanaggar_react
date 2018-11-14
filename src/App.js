import React, { Component } from 'react';
//React HTML Parser to parse html from strings
//import ReactHtmlParser from 'react-html-parser';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import Navigation from './lib/Navigation';
import * as actions from './actions';
import { fetchPages } from './fetchData';

const store = createStore(reducer);
window.store = store;

class App extends Component {
  /*  =========================== FETCH wordpress pages   */

  /*  =========================== FETC wiki page   */
  //http://localhost/prototype-wp-wiki/wiki/api.php?action=query&list=categorymembers&cmtitle=Category:Pages&format=json
  //http://localhost/prototype-wp-wiki/wiki/api.php?action=parse&format=json&page=Main_Page
  fetchWikiPages = ()=>{
    const wikiUrl = "http://localhost/prototype-wp-wiki/wiki/api.php?action=query&list=categorymembers&cmtitle=Category:Pages&format=json";
    const fetchHeader = {
      mode:'no-cors',
      credentials: 'include',
      headers: {
        "Access-Control-Allow-Credentials": false,
        'Access-Control-Allow-Origin': "192.168.2.117:3000",
        origin: "192.168.2.117:3000",
      }
    };
    fetch(wikiUrl, fetchHeader).then((results)=>{
      console.log("WikiPages: ", results)
    })
  }
  
  /*  =========================== COMPONENT DID MOUNT   */
  componentDidMount(){
    //fetches WP pages
    fetchPages().then((pages)=>{
      store.dispatch(actions.getPages(pages));
    })
    this.fetchWikiPages();
  }
  /*  =========================== RENDER   */
  render() {
    return (        
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
