import styled from "styled-components";

export const SharedLayout = styled.div`
  min-width: ${(props) => props.theme.width.mobile};
  /* margin-right: auto;
  margin-left: auto; */

  @media (min-width: 1440px) {
    min-width: ${(props) => props.theme.width.desktop};
  }
`;