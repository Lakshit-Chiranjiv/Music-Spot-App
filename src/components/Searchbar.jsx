import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from 'react-icons/fi'

const Searchbar = () => {

  const navigate = useNavigate()
  const [searchSongName,setSearchSongName] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/search/${searchSongName}`)
  }

  return (
    <form autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600" onSubmit={handleSearch}>
      <label htmlFor="search-field" className="sr-only">Search all songs</label>

      <div className="flex justify-start items-center">
        <FiSearch className="w-5 h-5 ml-4"/>
        <input type='search' placeholder="Search songs" name="search-field" autoComplete="off" id="search-field" value={searchSongName} onChange={(e) => setSearchSongName(e.target.value)} className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4" />
      </div>
    </form>
  )
};

export default Searchbar;
