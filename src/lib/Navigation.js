import React from 'react';
import { connect } from 'react-redux';
//pages
import Header from './components/header';
import Footer from './components/footer';
import MainPage from './pages/page-main';
import News from './pages/page-news';
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
            return<MainPage />;
            //edit page
            case "page-edit":    
            return<EditPage />;
            //create page
            case "page-create":   
            return <CreatePage />;
            //main page
            case "page-main":     
            return <MainPage/>;
            //wiki main page
            case "page-wiki":     
            return <Wiki />;
            //single article/page
            case "page-single":   
            return <SinglePage />;
            //wordpress/news main page
            case "page-news":     
            return <News />;
        }
    }
    render() {
        return (
            <div>
                <Header />
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
    updateWikiNav: (wiki) => {dispatch(actions.updateWikiNav(wiki))},
    getPages: (pages) => {dispatch(actions.getPages(pages))}
})
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);