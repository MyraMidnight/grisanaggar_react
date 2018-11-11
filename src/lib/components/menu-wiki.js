// a featured navigation of wiki
// will probably be either a 

import React from 'react';
import { connect } from 'react-redux';

class MenuWiki extends React.Component {
    render() {
        return (
            <ul>
                <h4>Wiki</h4>
            </ul>
        )
    }
}

const mapStateToProps = (state)=>{
    return state
}

export default connect(mapStateToProps)(MenuWiki);