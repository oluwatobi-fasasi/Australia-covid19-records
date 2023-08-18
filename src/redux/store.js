// eslint-disable-next-line import/no-extraneous-dependencies
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
