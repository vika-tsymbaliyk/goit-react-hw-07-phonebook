import { deleteContact } from "redux/operations";
import { ContactWrap, ButtonDel } from "./Contact.styled";
import { useDispatch} from "react-redux";

export const Contact = ({contact })=>{

  const dispatch = useDispatch();
  
    const {id, name, phone} = contact;
    return(
    <ContactWrap>
        <p>{name}: { phone}</p>
        <ButtonDel onClick={()=> dispatch(deleteContact(id))}>Delete</ButtonDel>
    </ContactWrap>
    )
}