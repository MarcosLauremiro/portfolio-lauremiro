import styled from "styled-components";

export const FooterStyle = styled.footer`
  background-color: ${({ theme }) => theme.bc};
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Roboto", sans-serif;
  color: #ffffff;
  line-height: 1.25;
  .footer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    max-width: 40rem;
    width: 100%;

    @media (min-width: 1000px) {
      max-width: 35rem;
    }
    padding-bottom: 4rem;
    padding-top: 4rem;
    .links {
      display: flex;
      align-items: center;
      gap: 20px;

      a {
        color: #ffffff;
      }
    }
    .brand {
      span {
        font-size: 0.7rem;
        color: #adb5bd;
      }
    }
  }
`;
