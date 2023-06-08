import { Field, Form } from "formik";
import styled from "styled-components"

export const Label = styled.label`
margin-bottom: ${props => props.theme.space[2]};

font-family: ${props => props.theme.fontFamily.text};
font-weight: ${props => props.theme.weight.bold};
font-size: ${props => props.theme.size.XXS};
line-height: 1.5;
`

export const CustomForm = styled(Form)`
text-align: left;`

export const Input = styled(Field)`
  padding-left: ${(props) => props.theme.space[6]};
  padding-top: ${(props) => props.theme.space[4]};
  padding-bottom: ${(props) => props.theme.space[4]};
  margin-bottom: ${(props) => props.theme.space[6]};

  width: ${(props) => props.theme.percentage[9]};

  font-size: ${(props) => props.theme.size.N};
  font-family: ${(props) => props.theme.fontFamily.text};

  border: 1px solid rgba(25, 24, 43, 0.25);
  border-radius: ${(props) => props.theme.radius[1]};

  @media (min-width: 1440px) {
    width: 85%;
  }
`;

export const SubmitButton = styled.button`
  margin-right: auto;
  margin-left: auto;
  padding-left: ${(props) => props.theme.space[10]};
  padding-right: ${(props) => props.theme.space[10]};
  padding-top: ${(props) => props.theme.space[4]};
  padding-bottom: ${(props) => props.theme.space[3]};

  font-family: ${(props) => props.theme.fontFamily.text};
  font-weight: ${(props) => props.theme.weight.bold};
  background-color: ${(props) => props.theme.color.text};
  color: ${(props) => props.theme.color.formBackground};
  line-height: 1.5;
  font-size: ${(props) => props.theme.size.N};

  border-radius: ${(props) => props.theme.radius[1]};

  @media (min-width: 1440px) {
    padding-left: 72px;
    padding-right: 72px;
  }
`;