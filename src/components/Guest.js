import React from 'react'
import PropTypes from 'prop-types'

import GuestName from './GuestName'

const Guest = ({ name, isConfirmed, isEditing, handleConfirmation, handleToggleEditing, setName }) =>  

            <li>
                <GuestName 
                    isEditing = { isEditing }
                    handleNameEdits = { e =>  setName(e.target.value)}
                >
                    { name }
                </GuestName>
                <label>
                    <input 
                        type="checkbox"
                        checked = { isConfirmed }
                        onChange = { handleConfirmation } /> Confirmed
                </label>
                <button onClick = { handleToggleEditing } >{ isEditing ? "Save" : "Edit" }</button>
                <button>remove</button>
            </li>

Guest.propTypes = {
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    handleConfirmation : PropTypes.func.isRequired,
    handleToggleEditing: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired
}

export default Guest