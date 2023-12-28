import React from 'react';

const Headers = () => {
  return (
    <>
      <div className='flex items-center justify-between w-full h-16 px-4 bg-slate-300 sm:px-6 lg:px-8'>
        <div className='pt-1 ml-1'>
          {/* Content on the left side */}
        </div>
        <div className='flex items-center pr-4 sm:pr-6 lg:pr-8'>
          <p className='mt-1 text-sm right sm:text-base lg:text-lg'>
            <b>Free Trial </b>| 2 days left
          </p>
          <img
            className="w-8 h-8 ml-2 rounded-full in-line-block ring-2 ring-white"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Headers;
