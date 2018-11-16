
import React from 'react';
//takes in an array as props.list and uses
// id and title

class MenuItem extends React.Component {
    changePage = (page)=>{        
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML =  `<h1>${page.title}</h1> ${page.content}`;
    }
    render(){
        return( 
            <li>
                <button className="link" type="button" onClick={()=>{this.changePage(this.props.page)}} >{this.props.page.title}</button> 
            </li>
           
        )
    }
}

export default MenuItem;