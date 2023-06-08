import styled from "styled-components"

export const MainPage = styled.div`
  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};
  padding-bottom: ${(props) => props.theme.space[10]};

  @media (min-width: 1440px) {
    width: 928px;
    height: 641px;
    padding-top: ${(props) => props.theme.space[6]};
    padding-bottom: ${(props) => props.theme.space[6]};
    padding-left: ${(props) => props.theme.space[11]};
    padding-right: ${(props) => props.theme.space[6]};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.theme.color.formBackground};

    border-radius: ${props => props.theme.radius[5]};
  }
`;

export const DeskContainer = styled.div`
width: 376px;
  margin-right: 64px;
`;