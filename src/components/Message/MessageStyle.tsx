import styled from "styled-components";

export const Container = styled.div`
display: flex;
  justify-content: center;  
`;

export const StyledMessageCard = styled.div`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(159, 159, 159, 0.25);
  margin: 10px 0px;

  .message-header {
    display: flex;
    align-items: center;

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .sender-info {

      .sender-name {
        width: 100%; 
        font-size: 16px;
        font-weight: 600;
        font-family: Montserrat;
        color: #000;
        text-align: left;
        display: inline-block;
      }
      .otp-info {
        width: 100%;  
        font-size: 15px;
        font-weight: 600;
        font-family: Montserrat;
        color: #888;
        text-align: left;
        display: inline-block;
      }
    }
  }

  .timestamp {
    width: 100%;
    position: relative;
    font-size: 10px;
    font-weight: 600;
    font-family: Montserrat;
    color: #313131;
    white-space: pre-wrap;
    text-align: right;
    display: inline-block;
  }
`;