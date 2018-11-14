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
                        <h2>Dashboard</h2>
                        <p>Post: {this.props.location.query.postTitle}</p>
                        <p>Please login to access the dashboard options</p>
                    </article>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Dashboard;