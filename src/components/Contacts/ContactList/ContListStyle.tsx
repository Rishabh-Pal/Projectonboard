import styled from "styled-components";
import themePalette from "../../../theme/theme";
 
export const Container = styled.div`
  display: flex;
  justify-content: center; 
  overflow-y: auto;
`;

export const ContactCard = styled.div`
  display: flex;
  width: 279px;
  height: 76px;
  align-items: center;
  background-color: ${themePalette.colors.butwhite};
  padding: 10px;
  border: 1px solid ${themePalette.colors.border};;
  border-radius: 8px;
  box-shadow: 0px 0px 10px ${themePalette.colors.boxshadow};
  margin: 10px 0px;
  cursor: pointer;  

  &:hover {
    .nohover {
      display: none;
    }

    .hover {
      display: flex;
    }
    background-color: ${themePalette.colors.listhover};
  }
`;

export const Avatar = styled.img`
  width: 50px;
height: 54px;
  border-radius: 50%;
  margin-left: 10px;
`;

export const Name = styled.span`
  width:100%;
  font-weight: bold;
  font-size: 20px;
`;
 

export const Hover = styled.div`
  display: none;  
  width: 100%;
`;
 

export const Arrow = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;