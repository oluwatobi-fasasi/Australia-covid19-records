import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://api.api-ninjas.com/v1/covid19?country=Australia';
const headers = {
  'X-Api-Key': 'LgO37qqgJKI555yev5bcsQ==feYBZkk2G964hlS1',
};
export const fetchCasesAsync = createAsyncThunk('case/fetchCases', async (_, thunkAPI) => {
  try {
    const response = await axios.get(API_BASE_URL, { headers });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const caseSlice = createSlice({
  name: 'case',
  initialState: {
    cases: [],
  },
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(fetchCasesAsync.fulfilled, (state, action) => {
        state.cases = action.payload;
      });
  },
});

export const selectAll = ((state) => state.case);
export default caseSlice.reducer;
