import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import deathReducer, { fetchDeathsAsync, fetchCovidDataByRegion } from './deathSlice';

describe('deathSlice Reducer', () => {
  it('should handle fetchDeathsAsync.fulfilled', () => {
    const initialState = {
      deaths: [],
    };

    const responsePayload = [{ region: 'Region 1' }, { region: 'Region 2' }];

    const action = { type: fetchDeathsAsync.fulfilled.type, payload: responsePayload };
    const state = deathReducer(initialState, action);

    expect(state.deaths).toEqual(responsePayload);
  });
});

describe('deathSlice Actions', () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: { death: deathReducer } });
  });

  it('should dispatch fetchDeathsAsync and update state correctly', async () => {
    const responsePayload = [{ region: 'Region 1' }, { region: 'Region 2' }];

    axios.get.mockResolvedValueOnce({ data: responsePayload });

    await store.dispatch(fetchDeathsAsync());

    const state = store.getState().death;

    expect(state.deaths).toEqual(responsePayload);
  });

  it('should fetch data by region correctly', async () => {
    const region = 'TestRegion';
    const responsePayload = [{ region: 'Test Region' }];

    axios.get.mockResolvedValueOnce({ data: responsePayload });

    const result = await fetchCovidDataByRegion(region);

    expect(result).toEqual(responsePayload);
  });
});

// Mock axios
jest.mock('axios');

// Run your tests
