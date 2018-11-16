
import React from 'react';
import MenuItem from './menu-item';
//takes in an array as props.list and uses
// id and title

class MenuList extends React.Component {
    changePage = (page)=>{        
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML =  `<h1>${page.title}</h1> ${page.content}`;
    }
    render(){
        return(
            <ul>
                {this.props.list.map((page, i)=>{
                    return (
                        //Each page li item
                        <MenuItem key={i} page={page} />
                    )
                })}
            </ul>
        )
    }
}

export default MenuList;