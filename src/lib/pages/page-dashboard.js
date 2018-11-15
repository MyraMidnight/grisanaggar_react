//dashboard for current user
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

class Dashboard extends React.Component {
    render() {
        return (
            <div id="wrapper">
                <Header />
                <nav id="sidebar" className="container">
                    {
                        //If logged in, show list of things user can do
                        // edit pages / delete pages
                        // create pages
                        // update profile/account
                    }
                </nav>
                <main id="content-wrapper" className="container">
                    <article className="content">
                        {console.log("wpDashboard: ", this.props.wpDashboard)}
                       <iframe src={this.props.wpDashboard} title="Grísanaggar WP Dashboard" height="100%" width="100%"/>
                    </article>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Dashboard;