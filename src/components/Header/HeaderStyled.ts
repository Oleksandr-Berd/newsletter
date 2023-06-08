import styled from "styled-components"

interface IProps {
    pic:string
 }

export const Header = styled.header`
  min-height: 284px;
  padding-top: ${(props) => props.theme.space[6]};

  background: linear-gradient(204.47deg, #ff6a3a 0%, #ff527b 100%);

  border-radius: 0px 0px 16px 16px;

  @media (min-width: 1440px) {
    width: 400px;
    height: 593px;

    border-radius: ${(props) => props.theme.radius[3]};
  }
`;

export const PicContainer = styled.div<IProps>`
  width: 100%;
  height: 220px;

  background: url(${(props) => props.pic});
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 1440px) {
   margin-top: ${props => props.theme.space[12]};
    
  }
`;