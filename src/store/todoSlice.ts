import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Item = {
  id: string;
  title: string;
  completed: boolean;
};
type ItemState = {
  list: Item[];
};

const initialState: ItemState = {
  list: [],
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<string>) {
      console.log(state);
      console.log(action);

      state.list.push({
        id: new Date().toString(),
        title: action.payload,
        completed: false,
      });
    },
    removeItem(state, action: PayloadAction<string>) {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    toggleCompleted(state, action: PayloadAction<string>) {
      const toggledItem = state.list.find(
        (item) => item.id === action.payload
      );
      if (toggledItem) {
        toggledItem.completed = !toggledItem.completed; // change state
      }
    },
  },
});

export const { addItem, removeItem, toggleCompleted } = itemSlice.actions;

export default itemSlice.reducer;
