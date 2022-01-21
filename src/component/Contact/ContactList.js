import React from "react";
import s from './Contact.module.scss'

const ContactList = ({contacts, onDeleteContact}) => {return(
<ul className={s.list}>
   {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.item}>
         <p className={s.itemTxt}>{name}:{number}</p>
         <button className={s.btnCont} onClick={()=>onDeleteContact(id)}>delete</button>
      </li>
   ))
   }
</ul>
);}

export default ContactList;