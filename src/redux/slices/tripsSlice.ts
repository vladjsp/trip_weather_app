import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import trips from '../../data/mock.json';

export interface ITrip {
  id: string;
  city: string;
  startDate: string;
  endDate: string;
  image: string;
}

interface ITripsInitialState {
  tripsList: ITrip[];
  searchValue: string;
}

const initialState: ITripsInitialState = {
  tripsList: trips,
  searchValue: '',
};

const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    addTrip: (state, action: PayloadAction<ITrip>) => {
      const newList = [...state.tripsList, action.payload];
      state.tripsList = newList;
    },
    changeSearch: (state, action: PayloadAction<string>) => {
      const search = action.payload;
      state.searchValue = search;
      console.log(state.searchValue);
    },
  },
});

export const { addTrip, changeSearch } = tripsSlice.actions;
export default tripsSlice.reducer;
