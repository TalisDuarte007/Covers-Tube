import styled from "styled-components";

const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.backgroundBase};
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.textColor};
  }
  .thumb {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 250px;
    height: auto;
  }
  button {
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundBase};
    color: ${({ theme }) => theme.textColor};
    border: none;
    display: flex;
    flex-direction: row;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    padding: 0 10px;
  }
  button:hover {
    cursor: pointer;
    transition: none;
    transform: none;
    background-color: ${({ theme }) => theme.backgroundBase};
    color: ${({ theme }) => theme.textColor};
    border: 1px solid black;
    border-radius: 15px;
    opacity: 1;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px 0 16px 0;
    .name-button {
      display: flex;
      flex-direction: row;
      gap: 20px;
      margin-bottom: 16px;
    }
    .videos-list {
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px, 1fr);
      overflow-x: hidden;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColor};
        }
      }
    }
  }
  @media only screen and (max-width: 600px){
    .thumb {
      min-width: 100%;
    }
        section{
          .videos-list {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
        }
        
      }
`;

export default function Timeline({ searchValue, ...props }) {
  const playlistNames = Object.keys(props.config.playlists);
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.config.playlists[playlistName];

        if (verificaArrayVazio(videos, searchValue) > 0) {
          return (
            <section key={playlistName}>
              <div className="name-button">
                <h2>{playlistName}</h2>
                <a href={props.config.linkPlaylist[playlistName]}>
                  <button>
                    <img src={props.config.links.button} />
                    Reproduzir Tudo
                  </button>
                </a>
              </div>

              <div className="videos-list">
                {videos
                  .filter((video) => {
                    const titleNormalized = video.title.toLowerCase();
                    const searchValueNormalizer = searchValue.toLowerCase();
                    return titleNormalized.includes(searchValueNormalizer);
                  })
                  .map((video) => {
                    return (
                      <a key={video.url} href={video.url}>
                        <img className="thumb" src={video.thumb} />
                        <span>{video.title}</span>
                      </a>
                    );
                  })}
              </div>
            </section>
          );
        }
      })}
    </StyledTimeline>
  );
}

function verificaArrayVazio(videos, searchValue) {
  const listaAtualizada = [];
  videos.filter((video) => {
    listaAtualizada.push(
      video.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  const newList = [];

  for (let videoAtualizado of listaAtualizada) {
    if (videoAtualizado) {
      newList.push(videoAtualizado);
    }
  }
  return newList.length;
}
