import { Contact } from "components/Contact/Contact";
import { ContactListWrap, ListItem } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { getContacts,  getFilter } from "redux/selectors";

export const ContactList =( )=>{
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filterContacts = contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()));

    return(
        <ContactListWrap>
          {filterContacts && filterContacts.map(contact => (
            <ListItem key={contact.id}>
                <Contact contact={contact}/>
            </ListItem>
          ))}
        </ContactListWrap>
    )
}

