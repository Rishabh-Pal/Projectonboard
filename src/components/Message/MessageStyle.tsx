import styled from "styled-components";
import themePalette from "../../theme/theme";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const MessageHead = styled.div`
  display: flex;
  align-items: center;
`;
export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const SenderName = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  font-family: Montserrat;
  color: ${themePalette.colors.black};
  text-align: left;
  display: inline-block;
`;

export const OtpInfo = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 600;
  font-family: Montserrat;
  color: ${themePalette.colors.numgrey};
  text-align: left;
  display: inline-block;
`;

export const TimeStamp = styled.div`
  width: 100%;
  position: relative;
  font-size: 10px;
  font-weight: 600;
  font-family: Montserrat;
  color: ${themePalette.colors.dates};
  white-space: pre-wrap;
  text-align: right;
  display: inline-block;
`;
export const StyledMessageCard = styled.div`
  padding: 15px;
  border: 1px solid ${themePalette.colors.primarywhite};
  border-radius: 8px;
  box-shadow: 0px 0px 10px ${themePalette.colors.boxshadow};
  margin: 0px 0px;
`;
