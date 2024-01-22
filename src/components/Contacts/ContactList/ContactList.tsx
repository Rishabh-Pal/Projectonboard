import React from "react";  
import { GetAllContacts } from "../../../typing";
import AssetIcons from "../../../assets";
import { Arrow, Avatar, ContactCard, Container, Hover, Name,   } from "./ContListStyle";

interface ContactlistProps {
  data: GetAllContacts;
  onArrowClick?: () => void;
}


export const Number: React.CSSProperties = {
  color: "#888",
  fontSize: "15px",
  fontWeight: "600",
};
export const Onhover:React.CSSProperties={
  width : "100%"
}
const ContactList: React.FC<ContactlistProps> = ({ data, onArrowClick }) => {
  const handleArrowClick = () => {
    if (onArrowClick) {
      onArrowClick();
    }
  };

  return (
    <Container>
      <ContactCard>
        <Avatar src={AssetIcons.Avatar} alt="avatar" />
        <div className="nohover" style={Onhover}>
          <Name>{data.userName}</Name>
          <div style={Number}>{data.mobile}</div>
        </div>
        <Hover className="hover">
          <Name>{data.userName}</Name>
          <Arrow
            src={AssetIcons.ArrowRight}
            alt="right-arrow"
            onClick={handleArrowClick}
          />
        </Hover>
      </ContactCard>
    </Container>
  );
};

export default ContactList;
