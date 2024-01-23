import styled from "styled-components";
import themePalette from "../../../theme/theme";

export const Container = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  justify-content: center;

`;

export const ContactInfoWrapper = styled.div`
  position: relative;
  width: 279px;
  height: 341px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 10px 0px;
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;

export const Avatar = styled.img`
  width: 70px;
  height: 71.918px;
  border-radius: 90px;
  border: 1px solid var(--Gray-1, #333);
  margin-right: 10px;
`;

export const Name = styled.span`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  width: 145px;
`;

export const Details = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: left;
  font-size: 15px;
  text-align: left;
  justify-content: start; 
  gap: 10px;
`;

export const DetailItem = styled.div`
  margin: 10px 0;
  align-items: left;
`;

export const Detailhead = styled.div` 
color: ${themePalette.colors.InfoTextgrey}
`

export const SendMessageButton = styled.button`
  position: absolute;
  bottom: 20px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 20px;
  width: 181px;
  height: 43px;
  background-color: ${themePalette.colors.butgreen};
  color: ${themePalette.colors.butwhite};
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const SendIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
`;
