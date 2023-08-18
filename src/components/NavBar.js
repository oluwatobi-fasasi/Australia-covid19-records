import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="flex justify-between p-5 bg-green-700 text-white text-sm font-extrabold">
      <Link to="/">
        <p className="text-sm font-extrabold md:text-2xl">
          <FontAwesomeIcon icon={faAngleLeft} />
          {' '}
          2020
        </p>
      </Link>

      <h1 className="md:text-2xl lg:text-4xl">Australia Covid19 Report</h1>

      <div>
        <FontAwesomeIcon icon={faMicrophone} className="pr-2 md:text-2xl" />
        <FontAwesomeIcon icon={faGear} className="md:text-2xl" />
      </div>
    </div>
  );
}
