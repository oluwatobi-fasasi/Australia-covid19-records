import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://api.api-ninjas.com/v1/covid19?country=Australia&type=deaths';
const headers = {
  'X-Api-Key': 'LgO37qqgJKI555yev5bcsQ==feYBZkk2G964hlS1',
};
export const fetchDeathsAsync = createAsyncThunk('death/fetchDeaths', async (_, thunkAPI) => {
  try {
    const response = await axios.get(API_BASE_URL, { headers });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const fetchCovidDataByRegion = async (region) => {
  const response = await axios.get(`https://api.api-ninjas.com/v1/covid19?country=Australia&type=deaths&region=${region}`, { headers });
  return response.data;
};

const deathSlice = createSlice({
  name: 'death',
  initialState: {
    deaths: [],
  },
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeathsAsync.fulfilled, (state, action) => {
        state.deaths = action.payload;
      });
  },
});

export const selectAll = ((state) => state.death);
export default deathSlice.reducer;
