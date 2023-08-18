import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import { fetchCasesAsync } from '../redux/cases/caseSlice';
import Details from './Details';
import { fetchDeathsAsync } from '../redux/deaths/deathSlice';
import Layout from './LayOut';

export default function CovidApp() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCasesAsync());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchDeathsAsync());
  }, [dispatch]);

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/details/:region" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
