//single article/page setup
//should change content depending on what was selected (wp news or wiki article)

import React from 'react';
import ReactHtmlParser  from 'react-html-parser';

class SinglePage extends React.Component {
    render() {
        return (
            <article>
                <h2>Single page: {this.props.data.title}</h2>
                {console.log("props data: ", this.props.data)}
                { ReactHtmlParser(this.props.data.content)}
            </article>
        )
    }
}

export default SinglePage;