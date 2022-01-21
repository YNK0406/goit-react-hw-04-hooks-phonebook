import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./component/Contact/ContactForm";
import Section from "./component/Section/Section";
import ContactList from "./component/Contact/ContactList";
import Filter from "./component/Filter/Filter";

class App extends Component {
   state = {
      contacts: [
         {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
         {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
         {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
         {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter: '',
      };

      addContact = ({ name, number }) => {
         const contact = {
         id: nanoid(),
         name,
         number,
         };
         this.setState(({ contacts }) => {
         if (contacts.some((contact) => contact.name === name)) {
            return alert(`${name} is already in contacts.`);
         }
         return {
            contacts: [contact, ...contacts],
         };
         });
      };
      deleteContact = delId=>{
         this.setState(prevState=>({
            contacts: prevState.contacts.filter(contact=>contact.id !==delId),
         }));
      };
      changeFilter = e =>{
         this.setState({filter: e.currentTarget.value});
      };
      getFilterContacts = () => {
         const { contacts, filter } = this.state;
         const normalizeFilter = filter.toLowerCase();
         return contacts.filter(contact =>
         contact.name.toLowerCase().includes(normalizeFilter),
         );
      };
      componentDidMount() {
         const contacts = localStorage.getItem("contacts");
         const parsedContacts = JSON.parse(contacts);
         if (parsedContacts) {
           this.setState({ contacts: parsedContacts });
         }
       };
       componentDidUpdate(prevProps, prevState) {
         if (this.state.contacts !== prevState.contacts) {
           localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
         }
       };
      render(){
       
         const contactFilter = this.getFilterContacts();
      return(
            <>
            <Section title='Phonebook'>
               <ContactForm onSubmit={this.addContact}/>
            </Section>
            <Section title='Contact'>
               <Filter value={this.state.filter} onChange={this.changeFilter}/>
               <ContactList 
               
               contacts={contactFilter} 
               onDeleteContact={this.deleteContact}
               
               />
            </Section>

            </>

      )
   }
}

export default App;
