import { deleteContactsAction } from "redux/contactsSlise";
import { ContactWrap, ButtonDel } from "./Contact.styled";
import { useDispatch} from "react-redux";

export const Contact = ({contact })=>{

  const dispatch = useDispatch();
  
    const deleteContact = (contactId, action) => {
        dispatch(deleteContactsAction(contactId, action))
      };
    const {id, name, number} = contact;
    return(
    <ContactWrap>
        <p>{name}: {number}</p>
        <ButtonDel onClick={()=> deleteContact(id)}>Delete</ButtonDel>
    </ContactWrap>
    )
}