import React from 'react'

const SampleProject = () => {
  return (
    <div>
      <h1 className='justify-center mt-2 text-2xl text-center underline bold'>Sample project is  completed </h1>
      {/* <img className='mt-3 ml-9' src='/public/image/images1.jpg' style={{ width: '60%', height: 'auto' }} ></img> */}
      <img
       className='mt-3 ml-9 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'
       src={ '/image/images1.jpg'}
      alt='Project Image'
/>
 </div>
  )
}

export default SampleProject
