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
            let title = "Hæhæ";
            switch(location){
                case "wiki": 
                    title= "Grísanaggar Wiki"
                    break;
                case "dashboard":
                    title= "Stjórnborð"
                    break;
                case "pages":
                    title= "Ýmislegt"
                    break;
                case "":
                default:
                    title= "Velkomin!"
                    break;
            }
            return title
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
                <nav>
                    <ul>
                        {this.props.headerLinks.map((link, i)=>(
                            //Render header links from redux state
                            <li key={i}>
                                <NavLink to={link.path} activeClassName="headerActive">{link.link}</NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Route path="/:location" component={this.headerTitle}  />         
            </header>
        )
    }
}

const mapStateToProps = (state)=>({
    headerLinks: state.headerLinks,
})

const mapDispatchToProps = (dispatch)=>({
    changeCurrentPage: (page) => {dispatch(actions.changeCurrentPage(page))}
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));