import React from 'react'
import { useState } from 'react';
import Modal from './Modal';

const Countires = ({data, datas, index, page}) => {
    const [key, setKey] = useState('');
    // console.log(page);

  return (
    <>
        {/* For Modal Pop up */}
        {key.length !== 0? <Modal keys={key} data={data}  />: ''}
        {page ==1? (data.indexOf(datas) < 125 &&
            <div className='flex flex-col align-middle justify-center text-gray-700 leading-8 px-2 max-w-xs border-2 border-gray-300 rounded-md py-4 px-5 my-5 mx-1'>
                <img src={datas.flags.png} className='rounded lg:w-72 lg:h-36' alt="" />
                <div className='px-2'>
                    <div className='flex flex-row'>
                        <p className='mr-9 pr-9' onClick={()=> setKey(index)} key={index} >{datas.name.official}</p>
                        <p>{datas.idd.root}{datas.idd.suffixes}</p>
                    </div>
                    
                    <div className='flex flex-row'>
                        <p>{datas.cca2} | </p>
                        <p className='mx-1'>{datas.cca3}</p>
                    </div>
                    <p>{datas.name.nativeName? datas.name.nativeName.ara&&datas.name.nativeName.ara.common : datas.name.nativeName}</p>
                    <p>{datas.name.nativeName? datas.name.nativeName.cha&& datas.name.nativeName.cha.common : datas.name.nativeName}</p>
                    <p>{datas.name.nativeName? ((datas.name.nativeName.ara&& datas.name.nativeName.ara.common)
                        ?(datas.name.nativeName.cal&& datas.name.nativeName.cal.common): datas.name.nativeName
                        ?(datas.name.nativeName.eng&& datas.name.nativeName.eng.common): datas.name.nativeName 
                        ?(datas.name.nativeName.srp&& datas.name.nativeName.srp.common): datas.name.nativeName
                        ?(datas.name.nativeName.cat&& datas.name.nativeName.cat.common): datas.name.nativeName
                        ) : datas.name.nativeName 
                    }
                    </p>
                    
                    <p className='max-w-fit'>{datas.altSpellings}</p>
                </div>  
            </div>
        ): " "}

        {page ==2? (data.indexOf(datas) >= 125 &&  
            <div className='flex flex-col align-middle justify-center text-gray-700 leading-8 px-2 max-w-xs border-2 border-gray-300 rounded-md py-4 px-5 my-5 mx-1'>
                <img src={datas.flags.png} className='rounded lg:w-72 lg:h-36' alt="" />
                <div className='px-2'>
                    <div className='flex flex-row'>
                        <p className='mr-9 pr-9' onClick={()=> setKey(index)} key={index} >{datas.name.official}</p>
                        <p>{datas.idd.root}{datas.idd.suffixes.slice(0, 4)}</p>
                    </div>
                    
                    <div className='flex flex-row'>
                        <p>{datas.cca2} | </p>
                        <p className='mx-1'>{datas.cca3}</p>
                    </div>
                    <p>{datas.name.nativeName? datas.name.nativeName.ara&&datas.name.nativeName.ara.common : datas.name.nativeName}</p>
                    <p>{datas.name.nativeName? datas.name.nativeName.cha&& datas.name.nativeName.cha.common : datas.name.nativeName}</p>
                    <p>{datas.name.nativeName? ((datas.name.nativeName.ara&& datas.name.nativeName.ara.common)
                        ?(datas.name.nativeName.cal&& datas.name.nativeName.cal.common): datas.name.nativeName
                        ?(datas.name.nativeName.eng&& datas.name.nativeName.eng.common): datas.name.nativeName 
                        ?(datas.name.nativeName.srp&& datas.name.nativeName.srp.common): datas.name.nativeName
                        ?(datas.name.nativeName.cat&& datas.name.nativeName.cat.common): datas.name.nativeName
                        ) : datas.name.nativeName 
                    }
                    </p>
                    
                    <p className='max-w-fit'>{datas.altSpellings}</p>
                </div>  
            </div>
        ): " "}
    </>
  )
}

export default Countires
