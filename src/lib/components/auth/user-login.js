//login for for existing user
//dashboard for current user
import React from 'react';
import { connect } from 'react-redux';
//import * as actions from '../../../actions';

class Login extends React.Component {
    submitForm = (event)=>{
        event.preventDefault();
        const data = new FormData(event.target);
        const formData = {
            //get the data from form
            username: data.get("username"),
            password: data.get("password"),
        }
        //sends formData with callback
        this.props.action(formData)
    }
    render() {
        return (
            <form onSubmit={this.submitForm}>
                <h3>Wordpress login:</h3>
                <label>Username: <input type="text" name="username" required /></label><br/>
                <label>Password: <input type="password" name="password" required /></label><br/>
                <button type="submit">login</button>
            </form>
        )
    }
}

const mapStateToProps = (state)=>{
    return state
}
export default connect(mapStateToProps)(Login);