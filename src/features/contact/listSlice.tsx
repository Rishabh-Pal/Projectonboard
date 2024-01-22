import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contact {
  userName: string;
  mobile: number;
  profession: string;
  address: string;
  imageURL: string;
}

interface ContactListState {
  contactList: Contact[];
}

const initialState: ContactListState = {
  contactList: [],
};

export const contactSlice = createSlice({
  name: "contactList",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contactList.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<{ index: number; contact: Contact }>) => {
      const { index, contact } = action.payload;
      state.contactList[index] = contact;
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contactList.splice(action.payload, 1);
    },
  },
});

export const { addContact, updateContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
