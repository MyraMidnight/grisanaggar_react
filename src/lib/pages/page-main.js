//page only showing featured mediawiki articles/navigation for wiki


import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactHtmlParser  from 'react-html-parser';
import Header from '../components/header';
import Footer from '../components/footer';

import MenuList from '../components/menu-list';
import * as actions from '../../actions';

class Welcome extends React.Component {
    changePage = (page)=>{
        this.props.changeCurrentPage({
            data: page,
        });
    }
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
                        <MenuList list={this.props.pages} action={this.changePage} />
                    </ul>
                </nav>
                <main id="content-wrapper" className="container">
                    <article className="content">
                        <h2>{this.props.currentPage.data.title}</h2>
                        { ReactHtmlParser(this.props.currentPage.data.content)}                        
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
  
const mapDispatchToProps = (dispatch)=>({
    changeCurrentPage: (page) => {dispatch(actions.changeCurrentPage(page))}
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Welcome)) ;