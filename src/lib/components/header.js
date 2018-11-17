//the header

import { connect } from 'react-redux';
import { NavLink, Route, withRouter } from 'react-router-dom';
import React from 'react';
import * as actions from '../../actions';


class Header extends React.Component {
    handleButtonClick = (page)=>{
        this.props.changeCurrentPage({page: page});
        return false
    }

    headerTitle = ({match})=>{
        //playing a bit with route location parameters
        // https://reacttraining.com/react-router/web/example/url-params
        const location = match.params.location;
        const switchTitle = ()=>{
            switch(location){
                case "wiki": 
                    return "Grísanaggar Wiki"
                case "dashboard":
                    return "Stjórnborð"
                case "pages":
                    return "Ýmislegt"
                default:
                    return "Velkomin!"
            }
        }
        return(
            <h1>
                {switchTitle()}
            </h1>
        )
                
    }
    render() {
        return (
            <header id="header" className="container">
                <ul>
                    <li><NavLink to="/pages" activeClassName="headerActive">Home</NavLink></li>
                    <li><NavLink to="/wiki">Wiki</NavLink></li>
                    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                </ul>
                <Route path="/:location" component={this.headerTitle}  />         
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));