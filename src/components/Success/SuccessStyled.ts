import styled from "styled-components"

export const SuccessPage = styled.div`
  padding-top: ${(props) => props.theme.space[13]};
  padding-bottom: ${(props) => props.theme.space[9]};
  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};
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
`;

export const Title = styled.h2`
  margin-bottom: ${(props) => props.theme.space[6]};
  margin-top: ${(props) => props.theme.space[9]};

  font-family: ${(props) => props.theme.fontFamily.text};
  font-weight: ${(props) => props.theme.weight.bold};
  font-size: ${(props) => props.theme.size.XXM};
  line-height: 1;
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

  border-radius: ${props => props.theme.radius[1]};
`;