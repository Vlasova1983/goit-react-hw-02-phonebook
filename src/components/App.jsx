import {Component} from "react";
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import styles  from './App.module.css';
import { number } from "prop-types";

export class App  extends Component {
  state = {
    contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: '',       
    number: ''    
  };

  handleChange = event => {    
    const { name, value } = event.target;
    this.setState({ [name]: value });     
  };  

  handleSubmit = event => {
    event.preventDefault();
    const newId = this.getRandomID();   
    this.setState({name: '',number: ''});
         
    this.state.contacts.push({id:newId, name:this.state.name,number:this.state.number});
  
    console.log(this.state);
  };

  handleFilterContacts =(value)=>{     
    this.setState(prevState=>{
     const newContactsList = prevState.contacts.filter((contact)=>contact.name.toLowerCase().includes(value));
     return{contacts:newContactsList};
    });
   };

  handleDeleteContact =(id)=>{   
   this.setState(prevState=>{
    const newContactsList = prevState.contacts.filter((contact)=>contact.id !== id);
    return{contacts:newContactsList};
   });
  };

  getRandomID() {
    return `${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  render(){ 
    const   {contacts} = this.state;
    const {name,number} = this.state
    return (
      <div className={styles.conteiner}>
        <h1>Phonebook</h1>
        <ContactForm name={name} number={number}  onSubmit={this.handleSubmit}  onChangeName={this.handleChange}  />

        <h2>Contacts</h2>
        <Filter onFilter={this.handleFilterContacts}/>
        <ContactList contacts={contacts} onDelete={this.handleDeleteContact} />
      </div>
    );
  }   
};
