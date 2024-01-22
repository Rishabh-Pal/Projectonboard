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
      background-color: ${themePalette["primary-gray"]};
    `}
`;