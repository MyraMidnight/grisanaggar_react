//dashboard for current user
import React from 'react';
import { Route } from 'react-router-dom';

//import Welcome from './pages/page-main';
import Wiki from '../pages/page-wiki';
import Dashboard from '../pages/page-dashboard';
import EditPage from '../pages/page-edit';
import CreatePage from '../pages/page-create';

class Routes extends React.Component {
    render() {
        return (
                <div>
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
            </div>
        )
    }
}

export default Routes;