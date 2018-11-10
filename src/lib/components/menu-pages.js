//header menu for desktop and bigger screens//the header

import { connect } from 'react-redux';

import React from 'react';
import * as actions from '../../actions';

class MenuPages extends React.Component {
    render() {
        return (
            <nav>
                {this.props.pages.map((page, i)=>{
                    return (
                        <div key={i}>
                            <span>{page.title}</span>
                            {console.log(page)}
                        </div>
                    )
                })}
            </nav>
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