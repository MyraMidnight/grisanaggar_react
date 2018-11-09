//page only showing recent news from wordpress

import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

class NewsPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <h2> News </h2>
                <Footer />
            </div>
        )
    }
}

export default NewsPage;