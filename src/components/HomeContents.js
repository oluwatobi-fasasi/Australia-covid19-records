import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../images/covid-19.png';

export default function HomeContents({ item }) {
  return (
    <div key={item.region} className="flex justify-between text-white bg-green-700 border-4 py-12 px-2 md:px-5">
      <li className="flex flex-col">
        <img src={logo} alt="covid-icon" className="w-10 h-10 md:w-24 md:h-24" />
        <p className="text-xs pt-2 md:text-2xl">
          {item.region}
        </p>
        <p className="text-xs md:text-2xl">
          Total cases:
          <span className="text-xs pl-3 md:text-2xl md:font-bold text-red-900">{item.cases['2020-08-08'].total}</span>
        </p>
      </li>
      <Link to={`/details/${item.region}`}>
        <FontAwesomeIcon icon={faRightLong} className="md:text-2xl" />
      </Link>
    </div>
  );
}
HomeContents.propTypes = {
  item: PropTypes.shape({
    region: PropTypes.string.isRequired,
    cases: PropTypes.shape({
      '2020-08-08': PropTypes.shape({
        total: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
