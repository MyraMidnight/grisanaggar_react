//the header

import { connect } from 'react-redux';

import React from 'react';
import * as actions from '../../actions';

class Header extends React.Component {
    handleButtonClick = (page)=>{
        this.props.changeCurrentPage({page: page});
        return false
    }
    render() {
        return (
            <header>
                <button className="link" onClick={()=>{this.handleButtonClick("page-main")}}><h2>Header</h2></button>
                
            </header>
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