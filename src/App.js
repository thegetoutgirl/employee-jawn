import React from 'react';
// import Index from '/Index/index.js';
import EmployeeList from './Components/Employees/Employees.js'
import Search from './Components/Search/Search.js'
// import Header from './Components/Header/Header.js'
// import Footer from './Components/Footer/Footer.js'
import './lumen-bootstrap.css'
import './styles.css'



function App() {
  return (
    <>
    {/* <Header /> */}
    <Search />
    <EmployeeList />
    {/* <Footer /> */}
    </>
  );
}

export default App;

