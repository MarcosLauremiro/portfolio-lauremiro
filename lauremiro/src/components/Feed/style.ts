import styled from "styled-components";
import photo from "../../assets/miro.jpg";

export const Posts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: ${({ theme }) => theme.bc};

  font-family: "Roboto", sans-serif;
  color: #ffffff;
  line-height: 1.25;

  padding: 3rem 1rem 0 1rem;
  word-spacing: 1px;

  .posts-container {
    display: flex;
    flex-direction: column;
    gap: 16px;

    max-width: 40rem;
    width: 100%;

    @media (min-width: 1000px) {
      max-width: 35rem;
    }

    .post {
      &:hover {
        background-color: rgba(73, 80, 87, 0.29);
        border-radius: 10px;
      }
      padding: 2rem 1rem 0 1rem;

      .header-post {
        position: relative;
        display: flex;
        gap: 8px;
        .perfil-container {
          width: 2.5rem;
          height: 2.5rem;

          span {
            position: absolute;
            top: -25px;
            font-size: 0.7rem;
            color: #adb5bd;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }
          .perfil {
            background-image: url(${photo});
            background-repeat: no-repeat;
            background-size: cover;

            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .caracter {
          display: flex;
          flex-direction: column;
          gap: 4px;
          .title {
            display: flex;
            align-items: center;
            gap: 6px;
            .name {
              font-size: 0.9rem;
              font-weight: 700;
            }
            .date {
              font-size: 0.7rem;
              color: #adb5bd;
            }
          }
          .status {
            background-color: #495057;
            font-size: 0.8rem;
            padding: 5px 0 5px 0;
            font-weight: 700;
            border-radius: 20px;
            width: 80%;
            text-align: center;
          }
        }
      }
      .content {
        padding: 0 0 0 3rem;
        line-height: 1.25;
        width: 89%;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        .title {
          font-size: 1.5rem;
          font-weight: 800;
        }
        .text {
          font-size: 15px;
          font-weight: normal;
          word-spacing: 1px;
          a {
            color: #d9048e;
            text-decoration: none;
          }
        }
        .file {
          position: relative;
          overflow: hidden;
          .imgs {
            transition: transform 0.5s ease;
            display: flex;
            img {
              width: 100%;
              border-radius: 10px;
            }
          }
          button{
            transform: translateY(-50%);
            background-color: transparent;
            border: none;
            color: wheat;
            position: absolute;
            cursor: pointer;
            top: 46%;
            z-index: 100;
          }
          .prev{
            left: 6%;
          }
          .next{
            right: 6%;
          }
        }
      }
      .buttons {
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 4px;
        margin-top: 4px;
        margin-right: 1rem;
        .link {
          color: #ffffff;
        }
        .like {
          color: #495057;
          cursor: pointer;
        }
      }
    }
  }
`;
