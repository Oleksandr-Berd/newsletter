import styled from "styled-components"

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  width: 100vw;
  height: auto;
  /* height: 100vh; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.space[13]};
  padding-bottom: ${(props) => props.theme.space[13]};

  padding-left: ${(props) => props.theme.space[6]};
  padding-right: ${(props) => props.theme.space[6]};

  background-color: ${(props) => props.theme.color.formBackground};
`;

export const ModalText = styled.div`
  /* position: absolute; */

  color: ${props => props.theme.color.text};
  font-weight: bold;
  text-align: left;
`;