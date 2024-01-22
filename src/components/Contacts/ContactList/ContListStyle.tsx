import styled from "styled-components";
 
export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContactCard = styled.div`
  display: flex;
  width: 279px;
  height: 76px;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(159, 159, 159, 0.25);
  margin: 10px 0px;
  cursor: pointer;  

  &:hover {
    .nohover {
      display: none;
    }

    .hover {
      display: flex;
    }
    background-color: rgba(208, 255, 216, 0.38);
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
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