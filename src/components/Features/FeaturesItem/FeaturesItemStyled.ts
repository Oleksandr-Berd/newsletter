import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  &:not(:last-child) {
    margin-bottom: ${(props) =>
      props.theme.space[2]};
  }
`;

export const Text = styled.p`
margin-left: ${props => props.theme.space[4]};

font-family: ${props => props.theme.fontFamily.text};
font-weight: ${props => props.theme.weight.normal};
font-size: ${props => props.theme.size.N};
line-height: 1.5;
`;
