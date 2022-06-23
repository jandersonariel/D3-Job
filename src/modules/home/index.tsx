import React from "react";
import * as S from "./styles";
import Banner from '../../components/Home/Banner'
import Main from '../../components/Home/Main'
import Footer from '../../components/Home/Footer'

const Home: React.FC = () => {

  return (
    <>
      <Banner />
      <Main />
      <Footer />
    </>
  );
};

export default Home;