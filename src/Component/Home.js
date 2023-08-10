import React from 'react'
import { useState, useEffect } from 'react';
import Pagination from './Pagination';
import Countires from './Countires';
import { useParams } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);

    const getData = async()=> {
      const result = await fetch('https://restcountries.com/v3.1/all').then((res)=>res.json());
      setData(result);
    }
  
    useEffect(()=> {
      getData();
    }, []);
  
    const [input, setInput] = useState('');
    const [sort, setSort] = useState('');
    /* For 25 rows per page */
    const params = useParams();
    // console.log('Params: ', params.page);
    
  return (
    <>
      <div className='my-9'>
        <div className='text-center mb-1'>
          <h3 className='text-3xl text-gray-700 uppercase tracking-wide border-indigo-500 hover:text-purple-600 hover:capitalize'>Countire Catalog</h3>
          <p className='border-b-2 border-gray-200 pb-2 max-w-md mx-auto'></p>
        </div>

        <div className='flex flex-row align-middle justify-between mx-9 px-9 mt-9'>
            {/* For Fuzzy Search */}
            <div className='search'>
                <div className='searchBox'>
                    <label className='text-md block mb-2' htmlFor='searchInput'>Search: </label>
                    <input type="text" className='border-2 border-slate-600 rounded-md text-sm py-1 px-2 ' id='searchInput' value={input} placeholder='Search something ....' onChange={(e)=> setInput(e.target.value)} required />
                </div>
            </div>
        
            {/* Sort By Country Name */}
            <div className='sort'>
              <label className='text-md block mb-2' htmlFor='sorting'>Sort: </label>
              <select className='py-1 px-3 text-sm bg-gray-100' name="sorting" id="sorting" value={sort} onChange={(e)=> setSort(e.target.value)}>
                <option value="" disabled>--------- Select one to do sorting --------</option>
                <option value="asc">Ascending </option>
                <option value="desc">Descending </option>
              </select>
            </div>
        </div>
      </div>  

      {/* Search Result */}
      <div className='searchResult grid grid-rows-4 grid-cols-5 gap-1 mx-7'>
        {input.length !==0 && data.filter((datas)=> {
          return input.toLowerCase() === ''? '':datas.name.official.toLowerCase().includes(input);
          })
          .map((item, index)=> {
            return (
              <div className='col flex flex-col align-middle justify-center text-gray-700 leading-8 px-2 max-w-xs border-2 border-gray-300 rounded-md py-4 px-5'>
                <img src={item.flags.png} className='rounded lg:w-72 lg:h-36' alt="" />
                <div className='px-2'>
                  <div className='flex flex-row'>
                    <p className='mr-9 pr-9' key={index} >{item.name.official}</p>
                    <p>{item.idd.root}{item.idd.suffixes}</p>
                  </div>
                  
                  <div className='flex flex-row'>
                    <p>{item.cca2} | </p>
                    <p className='mx-1'>{item.cca3}</p>
                  </div>
                  <p>{item.name.nativeName? item.name.nativeName.ara&&item.name.nativeName.ara.common : item.name.nativeName}</p>
                  <p>{item.name.nativeName? item.name.nativeName.cha&& item.name.nativeName.cha.common : item.name.nativeName}</p>
                  <p>{item.name.nativeName? ((item.name.nativeName.ara&& item.name.nativeName.ara.common)
                      ?(item.name.nativeName.cal&& item.name.nativeName.cal.common): item.name.nativeName
                      ?(item.name.nativeName.eng&& item.name.nativeName.eng.common): item.name.nativeName 
                      ?(item.name.nativeName.srp&& item.name.nativeName.srp.common): item.name.nativeName
                      ?(item.name.nativeName.cat&& item.name.nativeName.cat.common): item.name.nativeName
                      ) : item.name.nativeName 
                    }
                  </p>
                  
                  <p className='max-w-fit'>{item.altSpellings}</p>
                </div>
                
            </div>
            )
          })
        }

      </div>

      <div className='catalog grid grid-rows-4 grid-cols-5 gap-1 mx-7'>
        {((sort === 'asc') || (sort === '')) && data.sort((a, b)=> a.name.official > b.name.official? 1:-1) 
          .map((datas, index) => {
            return  <Countires data={data} datas={datas} index={index} page={params.page} />        
        })}

        {/* Descending Order by country name */}
        {sort === 'desc' && data.sort((a, b)=> a.name.official > b.name.official? -1:1) 
          .map((datas, index) => {
            return  <Countires data={data} datas={datas} index={index} page={params.page} />        
        })}
      </div>
      <Pagination showData={data} />
    </>
  )
}

export default Home
