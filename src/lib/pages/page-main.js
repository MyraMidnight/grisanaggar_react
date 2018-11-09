/*
Wordpress
MediaWiki

Main page (latest news, featured content)
    header
    fetch featured content
        news item (wp)
        featured wiki navigation (mediawiki)
    footer

Loading
Login 
    login button
Sign up  > wordpress initial > creates a mediawiki account
    sign up form

wiki main ( all/featured wiki navigation)
    fetch wiki content
news main ( all/featured news/wordpress )
    fetch news content

single news
single wiki article
search / archive
    search form (query)
    search result item

create page/wiki article
    create form (wiki)
create post/page wordpress
    create form (wp)

edit wiki article
    edit form (wiki)
edit or delete post/page wordpress
    edit form (wp)

dashboard for logged in user
    logout button

*/

import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

class MainPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <h2> Main Page </h2>
                <Footer />
            </div>
        )
    }
}

export default MainPage;