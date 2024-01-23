// import logo from './logo.svg';
// import './App.css';
// import Home, { Demo } from './components/Home/home';
// import { SuperOverLeague } from './components/Home/Superover';
// import { Congratulations } from './components/Home/congratcard';
// import { Font } from './components/Fontawesome/fontawesome';
import { Login } from './components/Fontawesome/MemberLogin';
// import { Tech } from './components/Fontawesome/technology';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Pages/contact';
import Layout from './components/Pages/layout';
import Blog from './components/Pages/Blog';
import Home from './components/Pages/Home';
import Nopages from './components/Pages/Nopages';
import { Button } from './components/Home/socialbutton';
import { Change } from './components/HooksPrg/counter';
import { Change1 } from './components/HooksPrg/fruits';
import DateCalculator from './components/HooksPrg/date';
import EmbeddedForm from './components/HooksPrg/Embedded';
import { Jsondetails } from './components/HooksPrg/jasondeatils';
import { Jsondetails1 } from './components/HooksPrg/jsonfake';
import { App1 } from './components/animation/animate';
import Toggle from './components/animation/animate2';
import { Product } from './components/HooksPrg/milestonereact';
import HoverComponent from './components/Pages/hover';
import Calculator from './components/Pages/Calculator';
import RegisterForm from './components/Pages/Registerform';





function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    {/* <form>
      <label>Enter FirstName</label>
      <input></input><br></br>
      <label>Enter LastName</label>
      <input></input><br></br>
      <label>Enter Address</label>
      <input></input><br></br>
      <label>Enter DOB</label>
      <input type='date'></input><br></br>
      <label>Enter Your email</label>
      <input type='email'></input><br></br>
      <button >Submit</button>
    </form> */}
    {/* <Home/>
    <Demo/> */}
    {/* <SuperOverLeague/> */}
    {/* <Congratulations/> */}
    {/* <Font/> */}
    {/* < Login/> */}
    {/* <Tech/> */}
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout />} />
    <Route path='/home' element={<Home/>}/>
    <Route path='/contact' element={<Contact />} />
    <Route path='/blog' element={<Blog/>} />
    <Route path='/Registerform' element={<RegisterForm/>} />
    <Route path='*' element={<Nopages/>}/>
   </Routes>
   </BrowserRouter>
   {/* <RegisterForm/> */}
   {/* <Calculator/> */}
   {/* <HoverComponent/> */}
   {/* <Change/> */}
   {/* <EmbeddedForm/> */}
   {/* <Change1/> */}
   {/* <DateCalculator/> */}
   {/* <Jsondetails/> */}
   {/* <Jsondetails1></Jsondetails1> */}
   {/* <App1/> */}
   {/* <Toggle/> */}
   {/* <ProductPage/> */}
   {/* <Product/> */}
   {/* <Layout/> */}
   {/* <Button/> */}
    </>
   
  );
}

export default App;
