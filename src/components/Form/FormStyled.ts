import { Field, Form } from "formik";
import styled from "styled-components"


interface IProps {
  errorStatus?: string;
}

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
justify-content: space-between;

  margin-bottom: ${(props) => props.theme.space[2]};
  padding-right: ${props => props.theme.space[3]};
`;

export const Label = styled.label`


font-family: ${props => props.theme.fontFamily.text};
font-weight: ${props => props.theme.weight.bold};
font-size: ${props => props.theme.size.XXS};
line-height: 1.5;
`

export const Error = styled.div`

color:${props => props.theme.color.valid};
  font-family: ${(props) => props.theme.fontFamily.text};
  font-weight: ${(props) => props.theme.weight.bold};
  font-size: ${(props) => props.theme.size.XXS};
  line-height: 1.5;
`;

export const CustomForm = styled(Form)`
text-align: left;`

export const Input = styled(Field)<IProps>`
  padding-left: ${(props) => props.theme.space[6]};
  padding-top: ${(props) => props.theme.space[4]};
  padding-bottom: ${(props) => props.theme.space[4]};
  margin-bottom: ${(props) => props.theme.space[6]};

  width: ${(props) => props.theme.percentage[9]};

  font-size: ${(props) => props.theme.size.N};
  font-family: ${(props) => props.theme.fontFamily.text};

  background: ${(props) =>
    props.errorStatus === "error" ? "rgba(255, 97, 85, 0.15)" : null};
  color: ${(props) =>
    props.errorStatus === "error" ? props.theme.color.valid : null};

  border: 1px solid rgba(25, 24, 43, 0.25);
  border-radius: ${(props) => props.theme.radius[1]};

  ::placeholder {
    color: ${(props) =>
      props.errorStatus === "error" ? props.theme.color.valid : null};
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
  background: ${(props) => props.theme.color.text};
  color: ${(props) => props.theme.color.formBackground};
  line-height: 1.5;
  font-size: ${(props) => props.theme.size.N};

  border-radius: ${(props) => props.theme.radius[1]};

  @media (min-width: 1440px) {
    padding-left: 72px;
    padding-right: 72px;

    &:hover,
    &:focus {
      background: linear-gradient(204.47deg, #ff6a3a 0%, #ff527b 100%);
      box-shadow: 0px 16px 32px rgba(255, 97, 85, 0.5);
      transition: background 300ms linear, box-shadow 300ms linear;

      cursor: pointer;
    }
  }
`;