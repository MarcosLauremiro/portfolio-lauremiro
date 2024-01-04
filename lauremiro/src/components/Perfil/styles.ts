import styled from "styled-components";
import capa from "../../assets/capa.svg";
import photo from "../../assets/miro.jpg";

export const PerfilStyle = styled.div`
  background-color: ${({ theme }) => theme.bc};
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Roboto', sans-serif;
  color: #ffffff;
  line-height: 1.25;
  .perfil-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    max-width: 40rem;
    width: 100%;
    position: relative;

    @media (min-width: 1000px) {
      max-width: 35rem;
    }
    .capa {
      height: 10rem;
      width: 100%;

      background-image: url(${capa});
      background-repeat: no-repeat;
      background-size: cover;
      background-position-y: bottom;
    }
    .photo-container {
      display: flex;
      align-items: center;

      .photo-perfil {
        height: 6rem;
        width: 6rem;

        border-radius: 50%;

        position: absolute;
        left: 1rem;
        top: 6.8rem;

        cursor: pointer;
        .photo {
          background-image: url(${photo});
          background-repeat: no-repeat;
          background-size: cover;

          width: 100%;
          height: 100%;
          border-radius: 50%;

          border: 0.25rem solid white;
        }
      }
      .follow {
        position: absolute;
        top: 10.4rem;
        right: 1rem;
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;

          text-decoration: none;
          color: #ffffff;

          background-color: #d9048e;
          padding: 10px 16px 10px 16px;
          border-radius: 20px;
          border: 2px solid #d9048e;

          font-weight: 700;
          font-size: 14px;
          &:hover{
            border: 2px solid #ffffff;
          }
        }
      }
    }
  }
`;
