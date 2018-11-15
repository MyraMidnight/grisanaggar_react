//page only showing featured mediawiki articles/navigation for wiki


import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
//import ReactHtmlParser  from 'react-html-parser';
import Header from '../components/header';
import Footer from '../components/footer';
import MenuList from '../components/menu-list';
import ReactHtmlParser  from 'react-html-parser';

class Wiki extends React.Component {
    changePage = (page)=>{
        this.props.changeCurrentPage({
            data: page,
        });
    }
    render() {
        //Sidebar should change when user selects 'dashboard'
        //to navigate the "backend"
        return (
            <div id="wrapper" className="page-sidebar">
                <Header />
                <nav id="sidebar" className="container">
                    {console.log("wikipages: ", this.props.wikiPages)}
                    <ul>
                        <h4>Articles</h4>
                        <MenuList list={this.props.wikiPages} action={this.changePage}/>
                    </ul>
                </nav>
                <main id="content-wrapper" className="container">
                    <article className="content">
                        
                    { ReactHtmlParser(this.props.currentPage.data.content)}  
                    </article>
                </main>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentPage: state.currentPage,
    wikiPages: state.wikiPages,
})
  
const mapDispatchToProps = (dispatch)=>({
    changeCurrentPage: (page) => {dispatch(actions.changeCurrentPage(page))}
})
export default connect(mapStateToProps, mapDispatchToProps)(Wiki) ;