
import './App.css';
import BlogCom from './blogpage/blog';
import HomeCom from './blogpage/home';
import HeaderCom from './layouts/header';
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import BlogDetail  from '../src/blogpage/detail/detail';
// import SortCom from './sort/sort';
function App() {
  return (
    <div className="App">
      {/* <SortCom/> */}
      <HeaderCom/>
     <Routes>
      <Route path="/blogcom" element={<BlogCom/>}/>
     <Route path="/homecom" element={<HomeCom />} />
     <Route path="/homecom:id" element={<BlogDetail />} />
     
     </Routes>
    
    </div>
  );
}

export default App;
