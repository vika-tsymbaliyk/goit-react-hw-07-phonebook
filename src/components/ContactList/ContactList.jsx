import { Contact } from "components/Contact/Contact";
import { ContactListWrap, ListItem } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "redux/selectors";

export const ContactList =( )=>{
  const contacts = useSelector(selectVisibleContacts);

    return(
        <ContactListWrap>
          {contacts.map(contact => (
            <ListItem key={contact.id}>
                <Contact contact={contact}/>
            </ListItem>
          ))}
        </ContactListWrap>
    )
}

