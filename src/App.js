import React, { Component } from 'react';
//React HTML Parser to parse html from strings
//import ReactHtmlParser from 'react-html-parser';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import Navigation from './lib/Navigation';
import * as actions from './actions';
import { wpPages, wikiCategories, wpCategory } from './fetchData';

const store = createStore(reducer);
window.store = store;

class App extends Component {  
  /*  =========================== COMPONENT DID MOUNT   */
  componentDidMount(){
    //fetches WP pages
    wpPages().then((pages)=>{
      store.dispatch(actions.getPages(pages));
    })
    /*wpCategory().then((categories)=>{
      store.dispatch(actions.getWpCategories(categories));
    })*/
    //Array of category names, case sensitive
    wikiCategories(["Naggrísir", "Matur", "Búrið", "Heilsan"]).then((categories)=>{
      //This will first fetch full list of existing categories
      //it will compare the names of categories to see if defined categories exist on the wiki
      //then it will continue to fetch the list of pages within existing categories
      //then again fetch the contents of each page per existing category
      //compiles it into a object that contains category title and array of pages
      store.dispatch(actions.getWikiCategories(categories));
    })
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
