//dashboard for current user
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import MenuPages from '../components/menu-pages';

class Dashboard extends React.Component {
    render() {
        return (
            <div id="wrapper">
                <Header />
                <nav id="sidebar" className="container">
                    <MenuPages />
                </nav>
                <main id="content-wrapper" className="container">
                    <article className="content">
                        <h2>Dashboard</h2>
                        </article>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Dashboard;