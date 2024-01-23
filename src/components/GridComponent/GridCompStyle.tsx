import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";
import themePalette from "../../theme/theme";

export const SideStyle = styled.div`
  justify-content: "center";
  @media (max-width: 768px) {
    width: 100%;
  }
`;

interface StyledMenuItemProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

export const StyledMenuItem = styled.div<StyledMenuItemProps>`
  display: flex;
  width: 157px;
  height: 53px;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  gap: 10px;
  padding: 5px;
  cursor: pointer;
  margin: 20px 20px;

  ${(props) =>
    props.active &&
    css`
      background-color: ${themePalette.colors.bgbutgrey};
    `}
`;

export const Menu = styled.div`
  text-align: left;
  margin: 20px 20px;
  font-size: 32px;
  font-weight: 700;
`;

export const Heading = styled.div`
  width: 100%;
  text-align: left;
`

export const Head = styled.div`
  margin-left: 20px;
  margin: 20px;
  font-size: 32px;
  font-weight: 600;
`;

export const Header = styled.div`
  border: 2px solid ${themePalette.colors.header};
`
export const GridHead = styled.div`
  font-size: 20px;
  margin-left:  20px;
  margin: 20px;
  font-weight: boold;
  text-align: left;
  color: ${themePalette.colors.head};
`