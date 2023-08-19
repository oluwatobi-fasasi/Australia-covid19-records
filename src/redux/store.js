import { configureStore } from '@reduxjs/toolkit';
import caseSlice from './cases/caseSlice';
import deathSlice from './deaths/deathSlice';

const store = configureStore({
  reducer: {
    case: caseSlice,
    death: deathSlice,
  },
});

export default store;
