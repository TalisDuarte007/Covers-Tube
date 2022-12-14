import styled from "styled-components";

const StyledFavorites = styled.div`
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.textColor};
  }
  img {
    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  a {
    scroll-snap-align: center;
    span {
      padding-top: 8px;
      display: block;
      padding-right: 24px;
      color: ${({ theme }) => theme.textColor};
    }
  }
`;

export default function Favorites(props) {
  const favoritesNames = Object.keys(props.favorites);
  return (
    <StyledFavorites>
      <h2>Canais Favoritos</h2>
      <div>
        {favoritesNames.map((favorite) => {
          const favoriteObj = props.favorites[favorite];
          return (
            <section key={favorite}>
              <a key={favoriteObj.link} href={favoriteObj.link}>
                <img className="image-favorites" src={favoriteObj.image} />
                <span>{favorite}</span>
              </a>
            </section>
          );
        })}
      </div>
    </StyledFavorites>
  );
}
