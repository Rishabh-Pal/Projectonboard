import styled from "styled-components";
import themePalette from "../../../theme/theme";

export const Container = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  justify-content: center;
`;

export const ContactComposeWrapper = styled.div`
  width: 300px;
  margin: 10px 0px;
`;

export const ComposeInput = styled.input`
  border: none;
  border-radius: 12px;
  width: 279px;
  font-size: 20px;
  font-family: Montserrat;
  height: 93px; 
  align-items: start; 
  color: ${themePalette.colors.palceholder};
  padding: 10px;
  box-shadow: 0px 2px 8px 0px ${themePalette.colors.boxshadow};
  text-align: left; 
`;

export const ComposeFooter = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GenerateOTP = styled.div`
  cursor: pointer;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SendButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 105px;
  height: 43px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${themePalette.colors.butwhite};
  background-color: ${themePalette.colors.butgreen};
`;

export const SendIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
`;