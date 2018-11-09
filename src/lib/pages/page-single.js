//single article/page setup
//should change content depending on what was selected (wp news or wiki article)

import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

class SinglePage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <h2> Single Page </h2>
                <Footer />
            </div>
        )
    }
}

export default SinglePage;