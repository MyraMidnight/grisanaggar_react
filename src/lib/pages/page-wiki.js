//page only showing featured mediawiki articles/navigation for wiki

import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

class Wiki extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <h2> Wiki </h2>
                <Footer />
            </div>
        )
    }
}

export default Wiki;