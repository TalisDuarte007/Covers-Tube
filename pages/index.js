import React from "react";
import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline";
import styled from "styled-components";
import Favorites from "../src/components/Favorites";



const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = React.useState("")
  return (
    <>
      <CSSReset />
      <StyledPage>
        <Menu  valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
        <Header />
        <Timeline searchValue={valorDoFiltro} config={config} />
        <Favorites favorites={config.favorites}/>
      </StyledPage>
    </>
  );
}

export default HomePage;
