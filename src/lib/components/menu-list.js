
import React from 'react';


class MenuList extends React.Component {
    changePage = (page)=>{
        this.props.action(page)
    }
    render(){
        return(
            <ul>
                {this.props.list.map((page, i)=>{
                    return (
                        //Each page li item
                        <li key={page.id}>
                            <button className="link" type="button" onClick={()=>{this.changePage(page)}} >{page.title}</button> 
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default MenuList;