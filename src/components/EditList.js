import React from 'react'

const EditList = props => 
    <form onSubmit = { props.submitHandler }>
        <input 
            type="text" 
            onChange = { props.inputChange }
            value= { props.pendingGuest } 
            placeholder="Invite Someone" />
        <button type="submit" name="submit" value="submit">Submit</button>
    </form>




export default EditList