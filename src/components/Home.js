import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { selectAll } from '../redux/cases/caseSlice';
import logo from '../images/covid-19.png';

export default function Home() {
  const { cases } = useSelector(selectAll);
  return (
    <div>
      <div className="bg-green-200 flex flex-col items-center py-5">
        <img src={logo} alt="logo" className="w-80 h-80" />
        <p className="md:text-2xl lg:text-4xl text-gray-400">Database</p>
      </div>
      <ul className="grid grid-cols-2">
        {cases.map((item) => (
          <div key={item.region} className="flex justify-between text-white bg-green-700 border-4 py-5 px-10">
            <li className="flex flex-col">
              <img src={logo} alt="covid-icon" className="w-16 h-16" />
              <p className="text-2xl pt-2">
                {item.region}
              </p>
              <p className="text-2xl">
                Total cases:
                <span className="pl-3 font-bold text-red-900">{item.cases['2020-08-08'].total}</span>
              </p>
            </li>
            <Link to={`/details/${item.region}`}>
              <FontAwesomeIcon icon={faRightLong} />
            </Link>

          </div>
        ))}
      </ul>
    </div>
  );
}
