import React from 'react'
import PropTypes from 'prop-types'


import GuestInput from './GuestInput'


const Header = ( { pendingGuest, inputChange, submitHandler} ) => 
    <header>
        <h1>RSVP</h1>
        <p>A React App</p>

        <GuestInput 
            pendingGuest = { pendingGuest }
            inputChange = { inputChange }
            submitHandler = { submitHandler }
        />

    </header>

Header.propTypes = {
    pendingGuest: PropTypes.string.isRequired,
    inputChange: PropTypes.func.isRequired,
    submitHandler: PropTypes.func.isRequired
}

export default Header