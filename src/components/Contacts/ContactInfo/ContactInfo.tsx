import React from "react";  
import { GetAllContacts } from "../../../typing";
import { Avatar, ContactInfoWrapper, Container, DetailItem, Detailhead, Details, HeaderInfo, Name, SendIcon, SendMessageButton } from "./ContInfoStyle";
import AssetIcons from "../../../assets";


interface ContactInfoProps {
  isVisible: boolean;
  onShowCompose: () => void;
  data: GetAllContacts;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  isVisible,
  onShowCompose,
  data,
}) => {
  if (!isVisible) {
    return null;
  }

  return (
    <Container isVisible={isVisible}>
      <ContactInfoWrapper>
        <HeaderInfo>
          <Avatar src={AssetIcons.Avatar} alt="avatar" />
          <Name>{data.userName}</Name>
        </HeaderInfo>
        <Details>
          <DetailItem>
            <Detailhead>Phone No:</Detailhead>
            <Detailhead>Profession:</Detailhead>
            <Detailhead>Address:</Detailhead>
          </DetailItem>
          <DetailItem>
            <div>{data.mobile}</div>
            <div>{data.profession}</div>
            <div>{data.address}</div>
          </DetailItem> 
        </Details>
        <SendMessageButton onClick={onShowCompose}>
          <SendIcon src={AssetIcons.Send} alt="send" />
          Send Message
        </SendMessageButton>
      </ContactInfoWrapper>
    </Container>
  );
};

export default ContactInfo;
