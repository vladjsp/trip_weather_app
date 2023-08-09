import { createSlice } from '@reduxjs/toolkit';

interface IModalsInitialState {
  isSideBarOpen: boolean;
  isModalOpen: boolean;
}

const initialState: IModalsInitialState = {
  isSideBarOpen: false,
  isModalOpen: false,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { toggleModal } = modalsSlice.actions;
export default modalsSlice.reducer;
