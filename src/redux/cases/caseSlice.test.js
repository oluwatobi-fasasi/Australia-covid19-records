import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import caseReducer, { fetchCasesAsync } from './caseSlice';

describe('caseSlice Reducer', () => {
  it('should handle fetchCasesAsync.fulfilled', () => {
    const initialState = {
      cases: [],
    };

    const responsePayload = [{ region: 'Region 1' }, { region: 'Region 2' }];

    const action = { type: fetchCasesAsync.fulfilled.type, payload: responsePayload };
    const state = caseReducer(initialState, action);

    expect(state.cases).toEqual(responsePayload);
  });
});

describe('caseSlice Actions', () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: { case: caseReducer } });
  });

  it('should dispatch fetchCasesAsync and update state correctly', async () => {
    const responsePayload = [{ region: 'Region 1' }, { region: 'Region 2' }];

    axios.get.mockResolvedValueOnce({ data: responsePayload });

    await store.dispatch(fetchCasesAsync());

    const state = store.getState().case;

    expect(state.cases).toEqual(responsePayload);
  });
});

// Mock axios
jest.mock('axios');

// Run your tests
