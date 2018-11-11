//header menu for desktop and bigger screens//the header

import { connect } from 'react-redux';

import React from 'react';
import * as actions from '../../actions';

class MenuPages extends React.Component {
    changePage = (page)=>{
        this.props.changeCurrentPage({
            page: "page-single",
            single: "page",
            data: page,
        });
    }
    render() {
        return (
            <ul>
                <h4>Pages</h4>
                {this.props.pages.map((page, i)=>{
                    return (
                        //Each page li item
                        <li key={i}>
                            <button className="link" type="button" onClick={()=>{this.changePage(page)}} >{page.title}</button> 
                        </li>
                    )
                })}
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