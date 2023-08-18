import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faAngleLeft, faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="flex justify-between px-20 py-5 bg-green-700 text-white text-4xl font-extrabold">
      <Link to="/">
        <p className="text-4xl font-extrabold">
          <FontAwesomeIcon icon={faAngleLeft} />
          {' '}
          2020
        </p>
      </Link>

      <h1 className="md:text-2xl lg:text-4xl">Australia Covid19 Report</h1>

      <div>
        <FontAwesomeIcon icon={faMicrophone} className="pr-5" />
        <FontAwesomeIcon icon={faGear} />
      </div>
    </div>
  );
}
