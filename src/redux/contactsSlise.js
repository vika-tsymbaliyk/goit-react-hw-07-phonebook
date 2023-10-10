import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


const contactsInitialState = [];

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {contacts: contactsInitialState},
    reducers: {
      addContactsAction: {
        reducer(state, action) {
          state.contacts.push(action.payload);
        },
        prepare(name,number) {
            return {
                payload: {
                    name,
                    number,
                    id: nanoid(),
                    }
                }
        }
    },   
      deleteContactsAction(state, action) {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      },
    },
  });
  
  export const { addContactsAction, deleteContactsAction} = contactsSlice.actions;
  export const contactsReducer = contactsSlice.reducer;