
import React from 'react';
import MenuItem from './menu-item';
//takes in an array as props.list and uses
// id and title

class MenuList extends React.Component {

    render(){
        return(
            <ul>
                <h4>{this.props.list_title}</h4>
                {this.props.list.map((page, i)=>{
                    return (
                        //Each page li item
                        <MenuItem key={i} index={i} page={page}/>
                    )
                })}
            </ul>
        )
    }
}

export default MenuList;