import { createGlobalStyle, css } from "styled-components";
import TitilliumExtraLightWoff2 from "./fonts/titillium-web-v8-latin-200.woff2";
import TitilliumExtraLightWoff from "./fonts/titillium-web-v8-latin-200.woff";
import TitilliumLightWoff2 from "./fonts/titillium-web-v8-latin-300.woff2";
import TitilliumLightWoff from "./fonts/titillium-web-v8-latin-300.woff";
import TitilliumRegularWoff2 from "./fonts/titillium-web-v8-latin-regular.woff2";
import TitilliumRegularWoff from "./fonts/titillium-web-v8-latin-regular.woff";
import TitilliumSemiBoldWoff2 from "./fonts/titillium-web-v8-latin-600.woff2";
import TitilliumSemiBoldWoff from "./fonts/titillium-web-v8-latin-600.woff";
import TitilliumBoldWoff2 from "./fonts/titillium-web-v8-latin-700.woff2";
import TitilliumBoldWoff from "./fonts/titillium-web-v8-latin-700.woff";
import TitilliumBlackWoff2 from "./fonts/titillium-web-v8-latin-900.woff2";
import TitilliumBlackWoff from "./fonts/titillium-web-v8-latin-900.woff";

const FontStyles = css`
  @font-face {
    font-family: "Titillium Web";
    font-style: normal;
    font-weight: 200;
    src: url(${TitilliumExtraLightWoff2}) format("woff2"),
      /* Super Modern Browsers */ url(${TitilliumExtraLightWoff}) format("woff");
  }
  @font-face {
    font-family: "Titillium Web";
    font-style: normal;
    font-weight: 300;
    src: url(${TitilliumLightWoff2}) format("woff2"),
      /* Super Modern Browsers */ url(${TitilliumLightWoff}) format("woff");
  }
  @font-face {
    font-family: "Titillium Web";
    font-style: normal;
    font-weight: 400;
    src: url(${TitilliumRegularWoff2}) format("woff2"),
      /* Super Modern Browsers */ url(${TitilliumRegularWoff}) format("woff");
  }
  @font-face {
    font-family: "Titillium Web";
    font-style: normal;
    font-weight: 600;
    src: url(${TitilliumSemiBoldWoff2}) format("woff2"),
      /* Super Modern Browsers */ url(${TitilliumSemiBoldWoff}) format("woff");
  }
  @font-face {
    font-family: "Titillium Web";
    font-style: normal;
    font-weight: 700;
    src: url(${TitilliumBoldWoff2}) format("woff2"),
      /* Super Modern Browsers */ url(${TitilliumBoldWoff}) format("woff");
  }
  @font-face {
    font-family: "Titillium Web";
    font-style: normal;
    font-weight: 900;
    src: url(${TitilliumBlackWoff2}) format("woff2"),
      /* Super Modern Browsers */ url(${TitilliumBlackWoff}) format("woff");
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    ${FontStyles}
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "Titillium Web";
  }
  #root {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text.primary01};
  }
`;
