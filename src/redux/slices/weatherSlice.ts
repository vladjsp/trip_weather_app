import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RequestStatus } from '../../types/enums';
import { ILocationTodayWeather, IWeatherData } from '../../types';

const BASE_WEATHER_API_URL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const API_KEY = '9XD2P34M6NK4J6YUY8LPATR8N';

export const getTodayWeather = createAsyncThunk(
  'weather/getTodayWeather',
  async ({ city }: { city: string }) => {
    try {
      const response = await fetch(
        `${BASE_WEATHER_API_URL}${city}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Error occurred while getting user info.');
    }
  }
);

export const getTripWeather = createAsyncThunk(
  'weather/getTripWeather',
  async ({ city, date1, date2 }: { city: string; date1: string; date2: string }) => {
    try {
      const response =
        await fetch(`${BASE_WEATHER_API_URL}${city}/${date1}/${date2}?unitGroup=metric&include=days&key=${API_KEY}&cont
    entType=json`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Error occurred while signing up.');
    }
  }
);

interface IWeatherInitialState {
  todayWeather: ILocationTodayWeather;
  tripWeather: IWeatherData;
  requestStatus: RequestStatus;
}

const initialState: IWeatherInitialState = {
  todayWeather: {},
  tripWeather: {},
  requestStatus: RequestStatus.Loading,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getCurrentWeather
      .addCase(getTodayWeather.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
        state.todayWeather = {};
      })
      .addCase(getTodayWeather.fulfilled, (state, action: PayloadAction<ILocationTodayWeather>) => {
        state.requestStatus = RequestStatus.Success;
        state.todayWeather = action.payload;
      })
      .addCase(getTodayWeather.rejected, (state) => {
        state.requestStatus = RequestStatus.Error;
        state.todayWeather = {};
      })
      // signUpUser
      .addCase(getTripWeather.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
        state.tripWeather = {};
      })
      .addCase(getTripWeather.fulfilled, (state, action: PayloadAction<IWeatherData>) => {
        state.requestStatus = RequestStatus.Success;
        state.tripWeather = action.payload;
      })
      .addCase(getTripWeather.rejected, (state) => {
        state.requestStatus = RequestStatus.Error;
        state.tripWeather = {};
      });
  },
});

// export const { resetUser } = userSlice.actions;
export default weatherSlice.reducer;
