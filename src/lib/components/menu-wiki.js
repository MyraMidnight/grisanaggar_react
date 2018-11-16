
import React from 'react';
import MenuItem from './menu-item';
//takes in an array as props.list and uses
// id and title
//Trying to make a menu that automatically lists separate categories from wiki

class MenuWiki extends React.Component {
    changePage = (page)=>{        
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML =  `<h1>${page.title}</h1> ${page.content}`;
    }
    render(){
        return(
            <ul>
                {this.props.list.map((category, i)=>{

                })}
            </ul>
        )
    }
}

export default MenuWiki;