//page only showing featured mediawiki articles/navigation for wiki


import React from 'react';
import { connect } from 'react-redux';
//import ReactHtmlParser  from 'react-html-parser';
import Header from '../components/header';
import Footer from '../components/footer';
import MenuList from '../components/menu/menu-list';
import { fetchWikiCategory } from '../../fetchData';
import { NavLink } from 'react-router-dom';

class Wiki extends React.Component {
    renderMenu = (category)=>{
        return fetchWikiCategory(category).then((pages)=>{
            console.log("Wiki category: ", pages)
            return pages
        })
    }
    changePage = (page)=>{        
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML =  `<h1>${page.title}</h1> ${page.content}`;
    }
    listItem = (link)=>{
        return (
            <NavLink activeClassName="active" to={{ search: `?type=${this.props.page.type}?index=${this.props.index}`
            }} onClick={()=>{this.changePage(this.props.page)}}>
                {this.props.page.title}
            </NavLink>
        )
        
    }
    render() {
        //Sidebar should change when user selects 'dashboard'
        //to navigate the "backend"
        return (
            <div id="wrapper" className="page-sidebar">
                <Header />
                <nav id="sidebar" className="container">                        
                    {this.props.wikiCategories.map((category, i)=>{
                        return(
                            <section key={i}>
                                <MenuList list_title={category.category} list={category.pages}/>
                            </section>
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