//header menu for desktop and bigger screens//the header


import React from 'react';
import MenuPages from './menu-pages';
import MenuWiki from './menu-wiki';

class Sidebar extends React.Component {
    render() {
        return (
            <nav id="sidebar" className="container">
                <MenuPages />
                <MenuWiki />
            </nav>
        )
    }
}


export default Sidebar;