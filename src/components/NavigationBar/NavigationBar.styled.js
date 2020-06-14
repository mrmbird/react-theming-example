import styled from "styled-components";

export const NavBarWrapper = styled.header`
  display: flex;
  align-items: center;

  height: 80px;
  width: 100%;

  background-color: ${(props) => props.theme.navBar};
`;

export const NavigationHeading = styled.h1`
  font-size: 22px;
  color: ${(props) => props.theme.primary01};
  padding-left: 15px;
`;
