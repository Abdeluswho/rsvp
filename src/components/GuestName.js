import React from 'react'
import Proptypes from 'prop-types'


const GuestName = (props) =>  {
   return props.isEditing 
            ?  
              (<input 
                    type = "text" 
                    value= { props.children }
                    onChange = { props.handleNameEdits }
                />)
            :  <span> { props.children } </span> 

        
}
   
GuestName.prototype = {
    isEditing: Proptypes.bool.isRequired,
    handleNameEdits: Proptypes.func.isRequired
}

export default GuestName