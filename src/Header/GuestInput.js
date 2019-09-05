import React from 'react'
import PropTypes from 'prop-types'

const GuestInput = props => 
    <form onSubmit = { props.submitHandler }>
        <input 
            type="text" 
            onChange = { props.inputChange }
            value= { props.pendingGuest } 
            placeholder="Invite Someone" 

        />
        <button type="submit" name="submit" value="submit">Submit</button>
    </form>

GuestInput.propTypes = {
    submitHandler:PropTypes.func.isRequired,
    inputChange: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
}


export default GuestInput