//the header

import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import React from 'react';
import * as actions from '../../actions';


class Header extends React.Component {
    handleButtonClick = (page)=>{
        this.props.changeCurrentPage({page: page});
        return false
    }
    render() {
        return (
            <header id="header" className="container">
                <ul>
                    <li><NavLink to="/" activeClassName="headerActive">Home</NavLink></li>
                    <li><NavLink to="/wiki">Wiki</NavLink></li>
                    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                </ul>           
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