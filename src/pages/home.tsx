import React from 'react';
import ButtomContainer from '../components/buttomContainer';
import Footer from '../components/footer';
import NavHeader from '../components/header';
import MiddleContainer from '../components/middleContainer';
import Prefooter from '../components/prefooter';
import SearchArea from '../components/searchArea';
import TopContainer from '../components/topContainer';


function Home() {
  return (
    <div>
    <NavHeader />
    <TopContainer />
    <MiddleContainer />
    <ButtomContainer />
    <SearchArea />
    <Prefooter />
    <Footer />
    </div>
  )
}

export default Home