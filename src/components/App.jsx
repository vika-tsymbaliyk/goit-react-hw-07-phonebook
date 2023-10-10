import { ContactForm } from "./ContactForm/ContactForm";
import { Layout } from "./Layout";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";


export const App =()=> {
  return(
  <Layout>
  <h1>Phonebook</h1>
  <ContactForm/>
    
  <h2>Contacts</h2>
  <Filter/>
  <ContactList/>
  </Layout>
  )

}