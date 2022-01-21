import  { useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./component/Contact/ContactForm";
import Section from "./component/Section/Section";
import ContactList from "./component/Contact/ContactList";
import Filter from "./component/Filter/Filter";
import useLocalStorage from "./hook/useLocalStorage";

function App() {
   const [contacts, setContacts] = useLocalStorage("contacts", [
      { id: "id-5", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-6", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-7", name: "Eden Clements", number: "645-17-79" },
      { id: "id-8", name: "Annie Copeland", number: "227-91-26" },
   ]);
   const [filter, setFilter] = useState('');

   const addContact = ({ name, number }) =>{
      const contact = {
         id: nanoid(),
         name: name,
         number: number,
      };
      setContacts((prevContacts) => [contact, ...prevContacts]);
   }


   const deleteContact = (delId) => {
      setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== delId)
      );
   };
   const filterList = () => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
      );
   };
      
         const changeFilter = e =>{
            setFilter( e.currentTarget.value);
         };

      return(
            <>
            <Section title='Phonebook'>
               <ContactForm 
               onSubmit={addContact}
               />
            </Section>
            <Section title='Contact'>
               <Filter 
                  value={filter}
                  onChange={changeFilter}
                />
               <ContactList 
                  contacts={filterList()} 
                  onDeleteContact={deleteContact}
               />
            </Section>
            </>

      )
   }


export default App;
