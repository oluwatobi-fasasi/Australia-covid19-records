import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCovidDataByRegion } from '../redux/deaths/deathSlice';
import logo from '../images/covid-19.png';

export default function Details() {
  const name = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const details = async () => {
      const countryDetails = await fetchCovidDataByRegion(name.region);
      setData(countryDetails);
    };
    details();
  }, [name]);
  return (
    <div className="bg-green-200">
      {
        data ? (
          <div>
            <div className="bg-green-200 flex justify-center py-5 md:h-fit">
              <img src={logo} alt="logo" className="" />
            </div>
            <ul className="flex flex-col">
              {data.map((item) => (

                <div key={item.region} className=" text-white bg-green-700 border-4 py-14 px-10">
                  <li className="flex flex-col">
                    <p className="text-xs pt-2 self-center md:text-3xl">
                      Region:
                      <span className="pl-3 text-xs font-bold md:text-4xl">{item.region}</span>
                    </p>
                    <p className="pt-10 text-xs self-center md:text-3xl">
                      Total number of death:
                      <span className="pl-3 font-bold md:text-3xl">{item.deaths['2020-08-08'].total}</span>

                    </p>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ) : (
          <div />
        )
      }
    </div>

  );
}
