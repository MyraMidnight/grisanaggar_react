//page only showing featured mediawiki articles/navigation for wiki


import React from 'react';
import { connect } from 'react-redux';
//import ReactHtmlParser  from 'react-html-parser';
import Header from '../components/header';
import Footer from '../components/footer';
import MenuList from '../components/menu-list';
import { fetchWikiCategory } from '../../fetchData';

class Wiki extends React.Component {
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
            <div id="wrapper" className="page-sidebar">
                <Header />
                <nav id="sidebar" className="container">                        
                    {console.log("wiki page categories: ", this.props.wikiCategories)}
                    {this.props.wikiCategories.map((category, i)=>{
                        return(
                            <ul key={i}>
                                <h4>{category.category}</h4>
                                <MenuList list={category.pages} />
                            </ul>
                        )
                    })}
                </nav>
                <main id="content-wrapper" className="container">
                    <article id="content" className="content">
                        <h2>Welcome to the wiki</h2>
                    </article>
                </main>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentPage: state.currentPage,
    wikiPages: state.wikiPages,
    wikiCategories: state.wikiCategories,
})
export default connect(mapStateToProps)(Wiki) ;