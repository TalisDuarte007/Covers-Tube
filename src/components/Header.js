import styled from "styled-components";
import config from "../../config.json";

const StyledHeader = styled.div`
  .icone-user {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

const StyledBanner =  styled.div`
    background: url(${config.links.bg}) center;
    background-size: cover;
    min-height: 230px;
    height: 25vw;
`;


export default function Header() {
  return ( 
    <StyledHeader>    
      <StyledBanner />
      <section className="user-info">
        <img className="icone-user" src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}