//form for editing wordpress news content//page only showing featured mediawiki articles/navigation for wiki


import React from 'react';
import { connect } from 'react-redux';
import ReactHtmlParser  from 'react-html-parser';
import Header from '../components/header';
import Footer from '../components/footer';

import MenuList from '../components/menu-list';
import * as actions from '../../actions';

class EditPage extends React.Component {
    changePage = (page)=>{
        this.props.changeCurrentPage({
            data: page,
        });
    }
    render() {
        //Sidebar should change when user selects 'dashboard'
        //to navigate the "backend"
        return (
            <div id="wrapper" class="page-sidebar">
                <Header />
                <nav id="sidebar" className="container">
                </nav>
                <main id="content-wrapper" className="container">
                    <article className="content">
                        <h3>Edit post</h3>
                    </article>
                </main>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentPage: state.currentPage,
    pages: state.pages,
})
  
const mapDispatchToProps = (dispatch)=>({
    changeCurrentPage: (page) => {dispatch(actions.changeCurrentPage(page))}
})
export default connect(mapStateToProps, mapDispatchToProps)(EditPage) ;