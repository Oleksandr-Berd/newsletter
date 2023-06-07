import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "RobotoRegular";
  src: local("Roboto-Regular"),
    url(("../assets/fonts/Roboto-Regular.ttf")) format("truetype");
}
@font-face {
  font-family: "RobotoBold";
  src: local("Roboto-Bold"),
    url(("../assets/fonts/Roboto-Bold.ttf"))
      format("truetype");
}

h1, h2, h3, h4 , h5 ,h6{
  margin: 0;
}

span, p, a{
  margin: 0;
}

ul, nav{
  padding: 0;
  list-style: none;
}

img{
    display: block;
}
`;
