
/*
    [{ 
        title: "category title", 
        pages: [ array of pages ]
    }]

** takes array of categories, each with a title and array of pages.
*/
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//import ReactHtmlParser  from 'react-html-parser';
import MenuList from './menu-list';

class MenuCategories extends React.Component {
    render() {
        //Sidebar should change when user selects 'dashboard'
        //to navigate the "backend"
        return (
            <section>                        
                {this.props.categories.map((category, i)=>{
                    return(
                        <section key={i}>
                            <MenuList title={category.title} pages={category.pages}/>
                        </section>
                    )
                })}               
            </section>
        )
    }
}

export default MenuCategories ;