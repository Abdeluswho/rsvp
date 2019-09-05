import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import MainContent from './MainContent';


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

  getAttendingGuests= () => 
    this.state.guests.reduce(
      (total, guest) => guest.isConfirmed ? total + 1 : total ,0)
  

  render () {
    const totalInvited = this.getTotalInvited()
    const numberAttending = this.getAttendingGuests()
    const numberUnconfirmed =  totalInvited - numberAttending 
            
    return (
      <div className="App">
        <Header 
          pendingGuest = { this.state.pendingGuest }
          inputChange = { this.handleNewGuest }
          submitHandler = { this.handleNewGuestSubmit }
        />

        <MainContent 
          totalInvited = { totalInvited }
          numberAttending = { numberAttending }
          numberUnconfirmed = { numberUnconfirmed }
          guests = {this.state.guests}
          pendingGuest = { this.state.pendingGuest }
          isFiltered = { this.state.isFiltered }
          toggleConfirmationAt = { this.toggleConfirmationAt }
          toggleEditingAt = { this.toggleEditingAt }
          toggleFilter = { this.toggleFilter }
          setNameAt = { this.setNameAt }
          removeGuestAt = { this.removeGuestAt } 
        />
      </div>
    );
  }
}

export default App;
