//page only showing featured mediawiki articles/navigation for wiki


import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

import MenuList from '../components/menu/menu-list';

class WpPages extends React.Component {

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
                    <ul>
                        <h4>Pages</h4>
                        <MenuList list={this.props.pages} />
                    </ul>
                </nav>
                <main id="content-wrapper" className="container">
                    <article id="content" className="content">  
                        <h2>Welcome to the Pages</h2>                
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

export default withRouter(connect(mapStateToProps)(WpPages)) ;