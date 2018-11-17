
import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
//takes in an array as props.list and uses
// id and title

class MenuItem extends React.Component {
    changePage = (page)=>{        
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML =  `<h1>${page.title}</h1> ${page.content}`;
    }
    render(){
        //const pageLink = toString(this.props.location) + "?page=$" + toString(this.props.page.id);
        return( 
            <li>
                <Link className="link" 
                    to={{ 
                        search: `?type=${this.props.page.type}?index=${this.props.index}`
                            
                    }} 
                    onClick={()=>{this.changePage(this.props.page)}}>{this.props.page.title}</Link>
            </li>
           
        )
    }
}

const mapStateToProps = state => (
     state
)
export default withRouter(connect(mapStateToProps)(MenuItem));