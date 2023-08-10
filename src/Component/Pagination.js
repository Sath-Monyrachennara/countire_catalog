import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const Pagination = ({showData, handlePage}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const page= ()=> {
    var p =1;
    switch(currentPage) {
      case 1: 
        return p=1;
      case 2:
        return p=2;
      case 'pre':
        return p=1 && setCurrentPage(1);
      case 'next':
        return p=2 && setCurrentPage(2);
      default: 
        return p=1;
    }
  }
  page();

  return (
    <div className="mx-12 my-3 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-5 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <Link
          to={`/${currentPage}`}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </Link>
        <Link
          to={`/${currentPage}`}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </Link>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">2</span> of{' '}
            <span className="font-medium">{showData.length}</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <Link
              to={`/${currentPage}`}
              onClick={()=> setCurrentPage('pre')}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", 
            Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <Link
              to={`/${currentPage}`}
              onClick={()=> setCurrentPage(1)}
              aria-current="page"
              className={currentPage ===1?  "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" :"relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"}
            >
              1
            </Link>
            <Link
              to={`/${currentPage}`}
              onClick={()=> setCurrentPage(2)}
              className={currentPage ===2?  "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" :"relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"}
            >
              2
            </Link>
            <Link
              to={`/${currentPage}`}
              onClick={()=> setCurrentPage('next')}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination
