import styled from "styled-components"

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.color.formBackground};
`;

export const Modal = styled.div`
  position: absolute;


  color: white;
  font-weight: bold;
  background-color: black;
  text-align: center;
`;