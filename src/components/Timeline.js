import styled from "styled-components";
import config from "../../config.json";


const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px
    text-transform: capitalize;
  }
  .thumb {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 250px;
    height: auto;
  }
  button{
    align-items: center;
    background-color: white;
    border: none;
    display: flex;
    flex-direction: row;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    padding: 0 10px;
  }
  button:hover{
    cursor: pointer;
    transition: none;
    transform: none;
    background-color: #D3D3D3;
    color: black;
    border: 1px solid black;
    border-radius: 15px;
    opacity: 1;
    
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px 0 16px 0;
    .name-button{
      display: flex;
      flex-direction: row;
      gap: 20px;
      margin-bottom: 16px;
    }
    .videos-list {
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: hidden;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;

export default function Timeline(props) {
  console.log(props)
  const playlistNames = Object.keys(props.config.playlists);
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.config.playlists[playlistName];
        return (
          <section>
            <div className="name-button">
              <h2>{playlistName}</h2>
              <a href={props.config.linkPlaylist[playlistName]}>
                <button><img src={config.links.button} /> Reproduzir Tudo</button>
              </a>
            </div>
            
            <div className="videos-list">
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img className="thumb" src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}