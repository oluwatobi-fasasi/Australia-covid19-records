import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAll } from '../redux/cases/caseSlice';
import logo from '../images/covid-19.png';
import SearchInput from './SearchInput';
import HomeContents from './HomeContents';

export default function Home() {
  const { cases } = useSelector(selectAll);
  const [searchResults, setSearchResults] = useState([]);
  // const [data, setData] = useState(cases);

  const handleSearch = (searchTerm) => {
    const filteredCases = cases.filter((item) => item.region.toLowerCase()
      .includes(searchTerm.toLowerCase()));
    setSearchResults(filteredCases);
  };

  return (
    <div>
      <div className="bg-green-200 flex flex-col items-center py-5">
        <img src={logo} alt="logo" className="w-40 h-40 md:w-full md:h-full" />
        <p className="md:text-2xl lg:text-4xl text-gray-400 pb-2">Database</p>
        <SearchInput handleSearch={handleSearch} />
      </div>
      <ul className="grid grid-cols-2">
        {searchResults.length > 0
          ? searchResults.map((item) => (
            <HomeContents item={item} key="" />
          ))
          : cases.map((item) => (
            <HomeContents item={item} key="" />

          ))}
      </ul>
    </div>
  );
}
