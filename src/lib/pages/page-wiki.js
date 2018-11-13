//page only showing featured mediawiki articles/navigation for wiki


import React from 'react';
import { connect } from 'react-redux';
import ReactHtmlParser  from 'react-html-parser';
import Header from '../components/header';
import Footer from '../components/footer';
import MenuPages from '../components/menu-pages';

class Wiki extends React.Component {
    render() {
        //Sidebar should change when user selects 'dashboard'
        //to navigate the "backend"
        return (
            <div id="wrapper">
                <Header />
                <nav id="sidebar" className="container">
                    <MenuPages />
                </nav>
                <main id="content-wrapper" className="container">
                    <article className="content">
                        <h2>Single page: {this.props.currentPage.data.title}</h2>
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
  
export default connect(mapStateToProps)(Wiki) ;