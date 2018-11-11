import React from 'react';
import { connect } from 'react-redux';
//pages
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/menu-sidebar';
import MainPage from './pages/page-main';
import Wiki from './pages/page-wiki';
import SinglePage from './pages/page-single';
import EditPage from './pages/page-edit';
import CreatePage from './pages/page-create';
import * as actions from '../actions';

class Navigation extends React.Component {
    /* Switches the active page */
    pageSwitch(page) {
        switch(page.page){
            // default
            default:              
            return<MainPage className="content-wrapper"/>;
            //edit page
            case "page-edit":    
            return<EditPage  className="content-wrapper"/>;
            //create page
            case "page-create":   
            return <CreatePage  className="content-wrapper"/>;
            //main page
            case "page-main":     
            return <MainPage className="content-wrapper"/>;
            //wiki main page
            case "page-wiki":     
            return <Wiki  className="content-wrapper"/>;
            //single article/page
            case "page-single":   
            return <SinglePage data={page.data}  className="content-wrapper"/>;
            //wordpress/news main page
        }
    }
    render() {
        return (
            <div id="wrapper">
                <Header />
                <Sidebar />
                {this.pageSwitch(this.props.currentPage)}
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
    getWikiPages: (pages) => {dispatch(actions.getWikiPages(pages))},
    getPages: (pages) => {dispatch(actions.getPages(pages))}
})
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);