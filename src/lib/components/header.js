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
            <header className="container">
                <ul>
                    <li><a href="/" >Home</a></li>
                    <li><a href="/wiki">Wiki</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
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