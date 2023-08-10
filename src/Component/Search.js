import React from 'react'


const Search = ({data, onChange, value}) => {
  console.log(value);
  console.log(data);

  return (
    <>
      <div className='search'>
          <div className='searchBox'>
              <label htmlFor='searchInput'>Search: </label>
              <input type="text" id='searchInput' value={value} placeholder='Search something ....'  />
          </div>

          <div className='searchResult'>
              <h4>your result <span id='resultNum'>5</span></h4>
              <div className='result'>
                  <p></p>    
              </div>
          </div>
      </div>

      <div className='searchResult'>
        
      
        
      </div>
    </>
  )
}

export default Search
