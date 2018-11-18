//page only showing featured mediawiki articles/navigation for wiki


import React from 'react';
import { connect } from 'react-redux';
//import ReactHtmlParser  from 'react-html-parser';
import MenuList from './menu-list';
import { fetchWikiCategory } from '../../../fetchData';

class MenuWiki extends React.Component {
    renderMenu = (category)=>{
        return fetchWikiCategory(category).then((pages)=>{
            console.log("Wiki category: ", pages)
            return pages
        })
    }
    render() {
        //Sidebar should change when user selects 'dashboard'
        //to navigate the "backend"
        return (
                <nav id="sidebar" className="container">                        
                    {this.props.wikiCategories.map((category, i)=>{
                        return(
                            <section key={i}>
                                <MenuList list_title={category.category} list={category.pages}/>
                            </section>
                        )
                    })}
                </nav>
        )
    }
}

const mapStateToProps = state => ({
    currentPage: state.currentPage,
    wikiPages: state.wikiPages,
    wikiCategories: state.wikiCategories,
})
export default connect(mapStateToProps)(MenuWiki) ;