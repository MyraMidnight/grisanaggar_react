import React, { Component } from 'react';
//React HTML Parser to parse html from strings
//import ReactHtmlParser from 'react-html-parser';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import Navigation from './lib/Navigation';
import * as actions from './actions';
import { wpPages, fetchWikiCategories } from './fetchData';

const store = createStore(reducer);
window.store = store;

class App extends Component {  
  /*  =========================== COMPONENT DID MOUNT   */
  componentDidMount(){
    //fetches WP pages
    wpPages().then((pages)=>{
      store.dispatch(actions.getPages(pages));
    })

    //Array of category names, case sensitive
    fetchWikiCategories(["Naggrísir", "Matur", "Búrið", "Heilsan"]).then((categories)=>{
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
