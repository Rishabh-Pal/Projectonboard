// messagesSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Message {
  id: number;
  text: string;
  // Add other properties as needed
}

interface MessagesState {
  messages: Message[];
}

const initialState: MessagesState = {
  messages: [],
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    // Add other actions for updating and deleting messages as needed
  },
});

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
