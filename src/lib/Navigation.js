import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Route, Switch } from 'react-router-dom';
//pages
//import Welcome from './pages/page-main';
import Wiki from './pages/page-wiki';
import Dashboard from './pages/page-dashboard';
import EditPage from './pages/page-edit';
import CreatePage from './pages/page-create';

class Navigation extends React.Component {
    render() {
        return (
            <Switch>
                <Route //The welcome screen
                    exact path="/" component={Wiki} />
                <Route //Wiki pages (currently WP pages)
                    path="/wiki" component={Wiki} />
                <Route //The user dashboard, log in
                    path="/dashboard" component={Dashboard} />
                <Route //Editing or deleting pages
                    path="/edit" component={EditPage} />
                <Route //Create new pages
                    path="/create" component={CreatePage} />

                <Route // when none of the above match, <NoMatch> will be rendered 
                    component={Wiki} />
            </Switch>
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