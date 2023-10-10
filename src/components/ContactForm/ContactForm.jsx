import { Formik } from "formik";
import * as Yup from 'yup';
import { Label, ErrorMsg, Input, PhonebookForm} from "./ContactForm.styled";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getContacts} from "redux/selectors";
import { addContactsAction } from "redux/contactsSlise";



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
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const addContact = (newContact, action) =>{
    const { name, number } = newContact;

   const isExist = contacts.some(
      contact => contact.name.toUpperCase() === name.toUpperCase()
        || contact.number === number
    );
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return
    }
    action.resetForm();
    
      dispatch(addContactsAction(name, number));
    }


return(
<Formik
    initialValues={
      {
          name: "",
          number: "",
      }}
      
    validationSchema={SignupSchema}
    onSubmit={addContact}
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
