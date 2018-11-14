//header menu for desktop and bigger screens//the header
//change this into a reusable menu template, feed it data to generate list

import { connect } from 'react-redux';

import React from 'react';
import * as actions from '../../actions';
import MenuList from './menu-list';

class MenuPages extends React.Component {
    changePage = (page)=>{
        this.props.changeCurrentPage({
            data: page,
        });
    }
    navigation = ()=>{
        
    }
    render() {
        return (
            <ul className="nav-pages nav-list">
                
                <h4>Pages</h4>
                <MenuList list={this.props.pages} action={this.changePage} />
            </ul>
        )
    }
}

const mapStateToProps = (state)=>{
    return state;
}

const mapDispatchToProps = (dispatch)=>({
    changeCurrentPage: (page) => {dispatch(actions.changeCurrentPage(page))}
})
export default connect(mapStateToProps, mapDispatchToProps)(MenuPages);