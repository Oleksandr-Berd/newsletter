import styled from "styled-components"

interface IProps {
    pic:string
 }

export const Header = styled.header<IProps>`
  height: 284px;

  background: url(${(props) => props.pic}),
    linear-gradient(204.47deg, #ff6a3a 0%, #ff527b 100%);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center bottom;

  border-radius: 0px 0px 16px 16px;
`;

