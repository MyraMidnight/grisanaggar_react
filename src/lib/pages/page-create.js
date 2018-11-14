import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

class CreatePage extends React.Component {
    render() {
        return (
            <div id="wrapper">
                <Header />
                <nav id="sidebar" className="container">
                </nav>
                <main id="content-wrapper" className="container">
                    <article className="content">
                        <h2>Create page</h2>
                        </article>
                </main>
                <Footer />
            </div>
        )
    }
}

export default CreatePage;