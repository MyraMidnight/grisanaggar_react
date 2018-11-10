//the header

import { connect } from 'react-redux';

import React from 'react';
import * as actions from '../../actions';

class Header extends React.Component {
    handleWikiButton = (page)=>{
        return this.props.changeCurrentPage(page)
        
    }
    render() {
        return (
            <div>
                <h2> Header</h2>
                <nav>
                    <button type="button" onClick={this.handleWikiButton}> Wiki </button>
                    <button type="button" onClick={this.handleWikiButton}> Wiki </button>
                    <button type="button" onClick={this.handleWikiButton}> Wiki </button>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return state
}

const mapDispatchToProps = (dispatch)=>({
    changeCurrentPage: (page) => {dispatch(actions.changeCurrentPage(page))}
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);