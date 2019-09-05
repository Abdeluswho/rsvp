import React, { Component } from 'react';
import './App.css';
import GuestList from './components/GuestList';
import EditList from './components/EditList'


class App extends Component {
  
  state = {
    isFiltered: false,
    pendingGuest: '',
    guests: [
      {
        name: 'Treasure',
        isConfirmed: false,
        isEditing: false
      },
      {
        name: 'Nick',
        isConfirmed: true,
        isEditing: false
      },
      {
        name: 'Sofiane',
        isConfirmed: false,
        isEditing: true
      }
    ]
  }

  togglePropertyAt = (property, indexToChange) => 
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if(index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          }
        }

        return guest
      })
    })
  
  toggleConfirmationAt = index => 
    this.togglePropertyAt('isConfirmed', index)

  removeGuestAt = index => 
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index+1)
      ]
    })

  toggleEditingAt = index => 
    this.togglePropertyAt('isEditing', index)

  setNameAt = (name, indexToChange) => 
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if(index === indexToChange) {
          return {
            ...guest,
            name
          }
        }

        return guest
      })
    })

  toggleFilter = () => 
    this.setState({ isFiltered : !this.state.isFiltered})

  handleNewGuest = e =>{
    this.setState({ pendingGuest: e.target.value })
  }

  handleNewGuestSubmit = e => {
    e.preventDefault()
    this.setState({ 
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false

        },
        ...this.state.guests
      ],
      pendingGuest: ''
     })
  }

  getTotalInvited = () =>  this.state.guests.length;

  //getAttendinGuests= () => 
  //getUnconfirmedGuests =() =>

  render () {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <EditList 
            pendingGuest = { this.state.pendingGuest }
            inputChange = { this.handleNewGuest }
            submitHandler = { this.handleNewGuestSubmit }
            />
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input 
                type="checkbox" 
                onChange = { this.toggleFilter }
                checked = { this.state.isFiltered }
                /> Hide those who haven't responded 
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
            <GuestList 
              guests = {this.state.guests}
              pendingGuest = { this.state.pendingGuest }
              isFiltered = { this.state.isFiltered }
              toggleConfirmationAt = { this.toggleConfirmationAt }
              toggleEditingAt = { this.toggleEditingAt }
              setNameAt = { this.setNameAt }
              removeGuestAt = { this.removeGuestAt } />
        </div>
      </div>
    );
  }
}

export default App;
