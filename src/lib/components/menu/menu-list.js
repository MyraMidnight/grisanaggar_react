/*
    Single navigation list item
*/
import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
//takes in an array as props.list and uses
// id and title

class MenuList extends React.Component {
    changePage = (page)=>{        
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML =  `<h1>${page.title}</h1> ${page.content}`;
    }
    render(){
        //const pageLink = toString(this.props.location) + "?page=$" + toString(this.props.page.id);
        return( 
            <ul>
                <h4>{this.props.title}</h4>
                {this.props.pages.map((page, i)=>{
                    return (
                        //Each page li item
                        <li key={i}>
                            <NavLink 
                                to={{ search: `?type=${page.type}?index=${i}}` }} 
                                activeClassName="active"
                                onClick={()=>{this.changePage(page)}}>
                            {page.title}</NavLink>
                        </li>
                    )
                })}
            </ul>           
        )
    }
}
export default withRouter(MenuList);