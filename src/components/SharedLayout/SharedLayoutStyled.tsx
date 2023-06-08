import styled from "styled-components";

export const SharedLayout = styled.div`
    max-width: ${(props) => props.theme.width.mobile};
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 1440px) {
display: flex;
justify-content: center;
align-items: center;
padding-top: ${props => props.theme.space[14]};
padding-bottom: ${props => props.theme.space[14]};


      min-width: ${(props) => props.theme.width.desktop};
      height: 100vh;

      background-color: ${props => props.theme.color.desktopBackground};
    }
  `;