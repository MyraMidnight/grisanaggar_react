//the header

import { connect } from 'react-redux';

import React from 'react';
import * as actions from '../../actions';

class Header extends React.Component {
    handleButtonClick = (page)=>{
        this.props.changeCurrentPage({page: page});
    }
    render() {
        return (
            <div>
                <h2> Header</h2>
                <nav>
                    <button type="button" onClick={()=> this.handleButtonClick("page-wiki")}> Wiki </button>
                    <button type="button" onClick={()=> this.handleButtonClick("page-news")}> news </button>
                    <button type="button" onClick={()=> this.handleButtonClick("page-main")}> Main </button>
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