//page only showing featured mediawiki articles/navigation for wiki


import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import MenuWiki from '../components/menu/menu-wiki';
import MenuPages from '../components/menu/menu-pages';

//import MenuList from '../components/menu-list';

class Welcome extends React.Component {

    findPageContent = (id)=>{
        return this.props.pages.find((page)=>{
           return page.id === id;
        })
    }
    render() {
        //Sidebar should change when user selects 'dashboard'
        //to navigate the "backend"
        return (
            <div id="wrapper" className="page-sidebar">
                <Header />
                <nav id="sidebar" className="container">
                    <Route path="/wiki" component={MenuWiki} />
                    <Route path="/pages" component={MenuPages} />
                </nav>
                <main id="content-wrapper" className="container">
                    <article id="content" className="content">  
                        <h2>Welcome to the main page</h2>                
                    </article>
                </main>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentPage: state.currentPage,
    pages: state.pages,
})

export default withRouter(connect(mapStateToProps)(Welcome)) ;