import React from "react";
import { PageWrapper, ContentWrapper } from "./HomePage.styled";
import { NavigationBar } from "../../components/NavigationBar";

function HomePage() {
  return (
    <PageWrapper>
      <NavigationBar />
      <ContentWrapper>
        <p>Press 'T' to switch between themes</p>

        <p>
          This isn't a particularly pretty example. But this small app
          demonstrates how to use a custom theming system.
        </p>

        <p>
          As long as you have generic names for each of the colours, the
          ThemeProvider from styled-components will handle all of the theming
          for you by ensuring that all styled-components have access to the
          theme via props.
        </p>

        <p>This is an example theme for 'dark mode'</p>

        <code>
          {`{
    "name": "dark",
    "background": "#000",
    "navBar": "#233239",
    "text": {
      "primary01": "#fff",
      "primary02": "red"
    }
  }
  `}
        </code>
      </ContentWrapper>
    </PageWrapper>
  );
}

export default HomePage;
