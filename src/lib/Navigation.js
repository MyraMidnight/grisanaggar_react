import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Route, Switch } from 'react-router-dom';
//pages
import Welcome from './pages/page-main';
import Wiki from './pages/page-wiki';
import Dashboard from './pages/page-dashboard';
import EditPage from './pages/page-edit';
import CreatePage from './pages/page-create';
import WpPages from './pages/page-pages';

class Navigation extends React.Component {
    render() {
        return (
            <Switch>
                <Route //The welcome screen
                    exact path="/" component={Welcome} />
                <Route //Wiki pages (currently WP pages)
                    path="/pages" component={WpPages} />
                <Route //Wiki pages (currently WP pages)
                    path="/wiki" component={Wiki} />
                <Route //The user dashboard, log in
                    path="/dashboard" render={()=>
                        <Dashboard 
                            wpDashboard={this.props.wpDashboard}  />
                    } />
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
    wpDashboard: state.wpDashboard,
    headerLinks: state.headerLinks,
})
  
const mapDispatchToProps = (dispatch)=>({
    getWikiPages: (pages) => {dispatch(actions.getWikiPages(pages))},
    getPages: (pages) => {dispatch(actions.getPages(pages))}
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));