import React from 'react';
import Navbar from './ui/Navbar';
import Container from './ui/Container';
import Home from './ui/Home';
import About from './ui/About';
import Exprience from './ui/Exprience';
import Project from './ui/Project';
import Contact from './ui/Contact';
import LeftSide from './ui/LeftSide';
import RightSide from './ui/RightSide';
import ScrollBar from './ui/ScrollBar';

const App = () => {
  return (
    <div  className='bg-primaryColor text-lightText'>
      <Navbar/>
      {/* home */}
      <Container id={'home'}>
        <Home/>
      </Container>
      {/* about us */}
      <Container id={'about'}>
        <About/>
      </Container>
      {/* exprience */}
      <Container id={'exprience'}>
        <Exprience/>
      </Container>
      {/*  projects js */}
       <Container id={'project'}>
         <Project/>
      </Container>
      {/*  contact pages */}
      <Container id={'contact'}>
        <Contact/>
      </Container>
      {/*  left side  */}
      <LeftSide />
     {/*  right side  */}
      <RightSide/>
      {/*  scroll items  */}
      <ScrollBar/>
    </div>
  );
};

export default App;