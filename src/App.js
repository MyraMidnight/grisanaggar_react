import React, { Component } from 'react';
//React HTML Parser to parse html from strings
//import ReactHtmlParser from 'react-html-parser';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import Navigation from './lib/Navigation';


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
  render() {
    return (
      <div id="app-wrapper">
        <Provider store={store}>
          <Navigation />
        </Provider>
      </div>
    );
  }
}

export default App;
