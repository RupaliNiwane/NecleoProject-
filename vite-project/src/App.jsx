import React from 'react'
import Headers from './components/Headers';
import Sidebar from './components/sidebar';
import { Routes,Route} from 'react-router-dom';
import MyProject from './components/Myproject';
import IntroTo from './components/IntroTo'
import AllApps from './components/AllApps';
import './App.css'
import SampleProject from './components/SampleProject';
import Home from './components/Home';
import CreateFrom from './components/CreteFrom/CreateFrom'
import HelpSupport from './components/bottonSidebar/HelpSupport'
import  Feedback from './components/bottonSidebar/Feedback'
import Collapse from './components/bottonSidebar/Collapse'
function App() {
  return (
  <>
      <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Headers />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/myproject" element={<MyProject />} />
          <Route path="/sampleproject" element={<SampleProject />} />
          <Route path="/allapps" element={<AllApps />} />
          <Route path="/introto" element={<IntroTo />} />
          <Route path="/clickhere" element={<CreateFrom />} />
          <Route path="/helpsupport" element={<HelpSupport />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="collapse/" element={<Collapse />} />
        </Routes>
      </div>
    </div>
  </>
  )
}

export default App
