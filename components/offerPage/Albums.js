import styled from "styled-components";

const Albums = () => {
  return (
    <Wrapper>
      <h2>Albumy</h2>
      <section className="albumsAndCovers">
        <div className="oneAlbum">
          <h3>Album tradycyjny do wyklejania zdjęć</h3>
          <div className="oneAlbumContent">
            <div className="table">
              <p>Objętość:</p>
              <p>25 x 25 cm</p>
              <p>20 kart (40 stron)</p>
              <p>140 zł</p>
              <p>30 kart (60 stron)</p>
              <p>160 zł</p>
              <p>40 kart (80 stron)</p>
              <p>180 zł</p>
              <p>50 kart (100 stron)</p>
              <p>200 zł</p>
            </div>
          </div>
        </div>
        <div className="covers"></div>
      </section>
      <div className="images"></div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 0 auto;
  width: 100vw;
  min-height: 70vh;
  /* padding: 2vh 12vw; */
  h2 {
    margin-left: 12vw;
    text-transform: uppercase;
    color: var(--secondaryColor);
    font-size: 2rem;
    margin-bottom: 5vh;
  }
  .albumsAndCovers {
    width: 80%;
    margin: 5vh auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .oneAlbum {
      width: 60%;
      height: 50vh;
      background: var(--aboutMeBgColor);
      padding: 2vw;
      h3 {
        color: var(--secondaryColor3);
        font-size: 1.4rem;
        margin: 0 auto 5vh;
        text-align: center;
      }
      .table {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        p {
          padding: 5px 10px;
          font-size: 1rem;
          border: 1px solid var(--primaryColor);
          border-bottom: none;
          :nth-last-child(1),
          :nth-last-child(2) {
            border-bottom: 1px solid var(--primaryColor);
          }
          :nth-of-type(odd) {
            width: 65%;
          }
          :nth-of-type(even) {
            width: 35%;
            border-left: none;
          }
        }
      }
    }
    .covers {
      width: 30%;
      height: 50vh;
      background: var(--aboutMeBgColor);
    }
  }
`;

export default Albums;
