import React, { Component } from 'react';
//React HTML Parser to parse html from strings
//import ReactHtmlParser from 'react-html-parser';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
//pages
import MainPage from './lib/pages/page-main';
import News from './lib/pages/page-news';
import Wiki from './lib/pages/page-wiki';
import SinglePage from './lib/pages/page-single';
import EditPage from './lib/pages/page-edit';
import CreatePage from './lib/pages/page-create';


const store = createStore(reducer);
window.store = store;

class App extends Component {
  /*componentDidMount(){
    let projectsURL = "http://localhost/prototype-wp-wiki/wordpress/wp-json/wp/v2/pages";
    fetch(projectsURL).then(res=>res.json()).then((json)=>{
        console.log(json)
        this.setState({
          posts: json
        })
    })
  }
  */
  pageSwitch(page) {
    switch(page.page){
      case "page-edit":
        return<EditPage />;
      case "page-create":
        return <CreatePage />;
      case "page-main":
        return <MainPage />;
      case "page-wiki":
        return <Wiki />;
      case "page-single":
        return <SinglePage />;
      case "page-news":
        return <News />;
      default:
        return<MainPage />;
    }
  }
  render() {
    return (
      <div id="app-wrapper">
        <Provider store={store}>
          {this.pageSwitch({page:"page-main"})}
        </Provider>
      </div>
    );
  }
}

export default App;
