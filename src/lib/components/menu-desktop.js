//header menu for desktop and bigger screens//the header

import { connect } from 'react-redux';

import React from 'react';
import * as actions from '../../actions';

class MenuDesk extends React.Component {
    handleButtonClick = (page)=>{
        this.props.changeCurrentPage({page: page});
    }
    render() {
        return (
            <nav>
                <button type="button" onClick={()=> this.handleButtonClick("page-wiki")}> Wiki </button>
                <button type="button" onClick={()=> this.handleButtonClick("page-news")}> news </button>
                <button type="button" onClick={()=> this.handleButtonClick("page-main")}> Main </button>
            </nav>
        )
    }
}

const mapStateToProps = (state)=>{
    return state
}

const mapDispatchToProps = (dispatch)=>({
    changeCurrentPage: (page) => {dispatch(actions.changeCurrentPage(page))}
})
export default connect(mapStateToProps, mapDispatchToProps)(MenuDesk);