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
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { toggleSideBar, toggleModal } = modalsSlice.actions;
export default modalsSlice.reducer;
