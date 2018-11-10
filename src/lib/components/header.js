//the header

import { connect } from 'react-redux';

import React from 'react';
import * as actions from '../../actions';
import MenuDesk from './menu-desktop';

class Header extends React.Component {
    handleButtonClick = (page)=>{
        this.props.changeCurrentPage({page: page});
    }
    render() {
        return (
            <div>
                <h2> Header</h2>
                <MenuDesk />
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