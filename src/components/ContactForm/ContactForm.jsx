import { Formik } from "formik";
import * as Yup from 'yup';
import { Label, ErrorMsg, Input, PhonebookForm} from "./ContactForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "redux/selectors";
import { addContact } from "redux/operations";




const SignupSchema = Yup.object().shape({
    name: Yup.string()
    .test(
      "name",
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
      value => /^[a-zA-Zа-яА-Я]+((['][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(value)
    )
    .required('Required'),
    number: Yup.string()
    .test(
      "number",
      "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",
      value =>/\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/.test(value)
    )
    .required('Required'),
  });

export const ContactForm = ()=>{
  const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    const handleSubmit = (contact, actions)=> {
        const isExist = contacts.some(
        item => item.name.toLowerCase() === contact.name.toLowerCase()
            || item.phone === contact.phone
        );
    
        if (isExist) {
          alert(`${contact.name} or ${contact.phone} is already in contacts.`);
            return;
        }
        dispatch(addContact(contact));
        actions.resetForm();
  };

return(
<Formik
    initialValues={
      {
          name: "",
          number: "",
      }}
      
    validationSchema={SignupSchema}
    onSubmit={(contact, actions)=>handleSubmit(contact, actions)}
    >

  <PhonebookForm>
    <Label>Name
    <Input name="name" type="text"/>
    <ErrorMsg name="name" component="span"/>
    </Label>
    
    <Label>Namber
    <Input name="number" type="tel"/>
    <ErrorMsg name="number" component="span"/>
    </Label>

   <button type="submit">
       Add contact
     </button>
  </PhonebookForm>
  </Formik>
)}
