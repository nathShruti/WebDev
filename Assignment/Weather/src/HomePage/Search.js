import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './Search.css';
import { Axios } from 'axios';


    
export default function SearchBar () {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  // const [list, setList] = useState([]);

  // const options = async() => {
  //   try {
  //     const data = await Axios.get('https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=20')
  //     setList(data.data.results);
  //   } catch (error){
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   options();
  // }, [])
  // console.log(options);

  return (
    <>
    <div className='flex justify-center gap-x-3 py-2 bg-black'>
      <Select
        className="basic-single w-6/12"
        classNamePrefix="select"
        defaultValue={options[0]}
        name="data"
        options={options}
      />
      <button className='search-btn '>Search</button>
    </div>
    </>
  );
};