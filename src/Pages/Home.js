import React from 'react';
import RedInfoBox from '../Components/RedInfoBox.js';
import NavBar from '../Components/NavBar.js'

const HomePage = () => {

    const NavOptions = [
        {label: 'Home'},
        {label: 'Quizzes'},
        {label: 'Choose Your Own Adventure'},
        {label: 'Videos'},
        {label: 'Contact Us!'}
        ]

    return (
        <div> 
            <NavBar options={NavOptions}/>
        </div>
    )
}
export default HomePage;