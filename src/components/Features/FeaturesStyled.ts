import styled from "styled-components";

export const Container = styled.div`
  padding-top: ${(props) => props.theme.space[9]};

  text-align: left;

  @media (min-width: 1440px) {
    padding-top: 0;
  }
`;

export const Title = styled.h2`
  margin-bottom: ${(props) => props.theme.space[6]};

  font-family: ${(props) => props.theme.fontFamily.text};
  font-weight: ${(props) => props.theme.weight.bold};
  font-size: ${(props) => props.theme.size.XXM};

  @media (min-width: 1440px) {
    font-size: ${(props) => props.theme.size.L};
  }
`;

export const Text = styled.p`
  margin-bottom: ${(props) => props.theme.space[6]};

  font-family: ${(props) => props.theme.fontFamily.text};
  font-size: ${(props) => props.theme.size.N};
  font-weight: ${(props) => props.theme.weight.normal};
  line-height: 1.5;
`;
