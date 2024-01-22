import { configureStore } from "@reduxjs/toolkit";
import contactReducer from '../features/contact/listSlice';
import messagesReducer from "../features/message/MessageSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,  
    messages: messagesReducer,
  },
}); 

