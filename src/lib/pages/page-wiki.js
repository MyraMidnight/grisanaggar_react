//page only showing featured mediawiki articles/navigation for wiki

import React from 'react';
import WikiNav from '../components/item-wiki-nav';

class Wiki extends React.Component {
    render() {
        return (
            <div>
                <WikiNav />
            </div>
        )
    }
}

export default Wiki;