import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Route, Switch, Redirect } from 'react-router-dom';
//pages
import Wiki from './pages/page-wiki';
import Dashboard from './pages/page-dashboard';
import EditPage from './pages/page-edit';
import CreatePage from './pages/page-create';
import WpPages from './pages/page-pages';

class Navigation extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/pages" component={WpPages} />
                <Route path="/wiki" component={Wiki} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/edit" component={EditPage} />
                <Route path="/create" component={CreatePage} />
                <Redirect exact from="/" to="/pages" />
                <Route component={Wiki} />
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