import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
//pages
import MainPage from './pages/page-main';
import Wiki from './pages/page-wiki';
import Dashboard from './pages/page-dashboard';
import EditPage from './pages/page-edit';
import CreatePage from './pages/page-create';
/*<Switch>
    <Route path="/" component={MainPage} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/page" component={SinglePage} />
    <Route path="/wiki" component={Wiki} />
    <Route path="/edit" component={EditPage} />
    <Route path="/create" component={CreatePage} />
    {
        // when none of the above match, <NoMatch> will be rendered 
    }
    <Route component={MainPage} />
</Switch>*/
class Navigation extends React.Component {
    /* Switches the active page */
    pageSwitch(page) {
        switch(page.page){
            // default
            default:              
            return<MainPage/>;
            //edit page
            case "page-edit":    
            return<EditPage />;
            //create page
            case "page-create":   
            return <CreatePage />;
            //main page
            case "page-main":     
            return <Wiki />;
            //wiki main page
            case "page-wiki":     
            return <Wiki />;
            //user dashboard
            case "page-dashboard":     
            return <Dashboard />;
            //single article/page
            case "page-single":   
            return <Wiki />;
            //wordpress/news main page
        }
    }
    render() {
        //Sidebar should change when user selects 'dashboard'
        //to navigate the "backend"
        return (
            <div>
                    {this.pageSwitch(this.props.currentPage)}
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