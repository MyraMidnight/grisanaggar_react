//dashboard for current user
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Login from '../components/auth/user-login';
import { 
    //wpAuthenticate, 
    wpToken } from '../../fetchData';

class Dashboard extends React.Component {
    handleAuthentication = (formData)=>{
        /*
        //send the login info to authenticator
        wpAuthenticate(formData.username, formData.password).then((site)=>{
            console.log("You've been authenticated")
        })*/
        wpToken(formData.username, formData.password).then((token)=>{
            console.log("You got a token! ", token)
        })
    }
    render() {
        return (
            <div id="wrapper">
                <Header />
                <nav id="sidebar" className="container">
                    {
                        //If logged in, show list of things user can do
                        // edit pages / delete pages
                        // create pages
                        // update profile/account
                    }
                </nav>
                <main id="content-wrapper" className="container">
                    <article className="content">
                        <Login action={this.handleAuthentication}/>
                      
                    </article>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Dashboard;