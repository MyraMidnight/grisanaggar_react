// a featured navigation of wiki
// will probably be either a 

import React from 'react';
import { connect } from 'react-redux';

class WikiNav extends React.Component {
    render() {
        return (
            <nav>
                <h2> Wiki navigation </h2>
            </nav>
        )
    }
}

const mapStateToProps = (state)=>{
    return state
}

export default connect(mapStateToProps)(WikiNav);