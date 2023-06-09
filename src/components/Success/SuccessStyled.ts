import styled from "styled-components";

export const PageContainer = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: ${(props) => props.theme.space[14]};
    padding-bottom: ${(props) => props.theme.space[14]};

    min-width: ${(props) => props.theme.width.desktop};
    height: 100vh;

    background-color: ${(props) => props.theme.color.desktopBackground};
  }
`;

export const SuccessPage = styled.div`
  padding-top: ${(props) => props.theme.space[13]};
  padding-bottom: ${(props) => props.theme.space[9]};
  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};

  @media (min-width: 1440px) {
    margin-right: auto;
    margin-left: auto;
    padding-top: ${(props) => props.theme.space[10]};
    padding-bottom: ${(props) => props.theme.space[11]};
    padding-right: ${(props) => props.theme.space[11]};
    padding-left: ${(props) => props.theme.space[11]};

    background-color: ${(props) => props.theme.color.formBackground};
    box-shadow: 0px 15px 60px rgba(0, 0, 0, 0.25);
    border-radius: ${(props) => props.theme.radius[5]};
  }
`;

export const TextContainer = styled.div`
  margin-bottom: ${(props) => props.theme.space[14]};

  text-align: left;

  & > span {
    font-weight: ${(props) => props.theme.weight.bold};
    line-height: 1.5;
    font-family: ${(props) => props.theme.fontFamily.text};
    font-size: ${(props) => props.theme.size.N};
  }

  @media (min-width: 1440px) {
    width: 376px;

    margin-bottom: ${(props) => props.theme.space[9]};
  }
`;

export const Title = styled.h2`
  margin-bottom: ${(props) => props.theme.space[6]};
  margin-top: ${(props) => props.theme.space[9]};

  font-family: ${(props) => props.theme.fontFamily.text};
  font-weight: ${(props) => props.theme.weight.bold};
  font-size: ${(props) => props.theme.size.XXM};
  line-height: 1;

  @media (min-width: 1440px) {
    font-size: ${(props) => props.theme.size.L};
  }
`;

export const Text = styled.p`
  line-height: 1.5;
  font-family: ${(props) => props.theme.fontFamily.text};
  font-size: ${(props) => props.theme.size.N};
`;

export const DismissButton = styled.button`
  padding-top: ${(props) => props.theme.space[4]};
  padding-bottom: ${(props) => props.theme.space[3]};
  padding-left: 101px;
  padding-right: 99px;

  background-color: ${(props) => props.theme.color.text};
  color: ${(props) => props.theme.color.formBackground};
  font-family: ${(props) => props.theme.fontFamily.text};
  font-size: ${(props) => props.theme.size.N};
  line-height: 1.5;

  border-radius: ${(props) => props.theme.radius[1]};

  @media (min-width: 1440px) {
    padding-left: 125px;
    padding-right: 124px;

    &:hover,
    &:focus {
      background: linear-gradient(204.47deg, #ff6a3a 0%, #ff527b 100%);
      box-shadow: 0px 16px 32px rgba(255, 97, 85, 0.5);
      transition: background 300ms linear, box-shadow 300ms linear;

      cursor: pointer;
    }
  }
`;
