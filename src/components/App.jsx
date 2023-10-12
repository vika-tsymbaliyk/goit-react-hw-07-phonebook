import { ContactForm } from "./ContactForm/ContactForm";
import { Layout } from "./Layout";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectContacts, selectError, selectIsLoading} from "redux/selectors";


export const App =()=> {
  const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter)
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)
  const dispatch = useDispatch()

  useEffect(()=>{dispatch(fetchContacts())},[dispatch])

  return(
  <Layout>
  <h1>Phonebook</h1>
    {isLoading && <p>Loading...</p>}
    {error && <p>{error}</p>}
  <ContactForm/>
    
  <h2>Contacts</h2>
    {contacts.length === 0 && (
      <p>There are no any todos ... </p>
    )}
  <Filter/>
  <ContactList/>
  </Layout>
  )

}