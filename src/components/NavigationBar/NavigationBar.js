import React from "react";
import { NavBarWrapper, NavigationHeading } from "./NavigationBar.styled";
import { useTheme } from "styled-components";

function NavigationBar() {
  const theme = useTheme();

  return (
    <NavBarWrapper>
      <NavigationHeading>
        React Theme Example (Current Theme = {theme.name})
      </NavigationHeading>
    </NavBarWrapper>
  );
}

export default NavigationBar;
