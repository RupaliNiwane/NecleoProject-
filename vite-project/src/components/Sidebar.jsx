import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col justify-between w-full h-screen text-black md:w-1/6 bg-slate-400">
        <div>
          <h1 className='justify-center pt-3 ml-1 text-center'>
            <b className='text-2xl border-lime-200'>Necleo</b>
            {/* <img className='justify-center ml-6' src='/public/image/images5.png ' style={{width:'30%',height:'auto' }}></img> */}
          </h1>
          <hr />
          {/* Content of the sidebar goes here */}
          <Link to='/myproject'><p className='pl-4'><>MyProject</></p></Link>
          <Link to='/sampleproject'><p className='pl-4'><>Sample Project</></p></Link>
          <Link to='/allapps'><p className='pl-4'><>AllApps</></p></Link>
          <Link to='/introto'><p className='pl-4'><>Intro to Necleo</></p></Link>
        </div>
        
        <div className='mb-4'>
          <Link to='/helpsupport'><p className='pl-4'>Help & Support</p></Link>
          <Link to='/feedback'><p className='pl-4'>Feedback</p></Link>
          <Link to='/collapse'><p className='pl-4'>Collapse</p></Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
