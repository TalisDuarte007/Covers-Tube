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
  return (
    <>
      <CSSReset />
      <StyledPage>
        <Menu />
        <Header />
        <Timeline config={config} />
        <Favorites favorites={config.favorites}/>
      </StyledPage>
    </>
  );
}

export default HomePage;
