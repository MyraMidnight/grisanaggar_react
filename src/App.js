import React, { Component } from 'react';
//React HTML Parser to parse html from strings
import ReactHtmlParser from 'react-html-parser';
 

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        posts:[],
      }
  }
  componentDidMount(){
    let projectsURL = "http://localhost/prototype-wp-wiki/wordpress/wp-json/wp/v2/pages";
    fetch(projectsURL).then(res=>res.json()).then((json)=>{
        console.log(json)
        this.setState({
          posts: json
        })
    })
  }
  
  render() {
    //render each post
    let posts = this.state.posts.map((post, i)=>{
      return (
        <div key={i}>
          <h3>{ReactHtmlParser(post.title.rendered)}</h3>
          <div className="post-content">{ReactHtmlParser(post.content.rendered)}</div>
        </div>
      )
    })
    return (
      <div className="App">
        {posts}
      </div>
    );
  }
}

export default App;
