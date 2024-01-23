import { useEffect, useState } from "react";
import { getApis } from "../../services";
import { Container, StyledMessageCard, MessageHead, Avatar, SenderName, OtpInfo, TimeStamp } from "./MessageStyle";
import { GetAllMessage } from "../../typing"; 
import AssetIcons from "../../assets";
import {format } from "date-fns";

const MessageCard = () => {
  const [messages, setMessages] = useState<GetAllMessage[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllMessages = async () => {
      try {
        const messagesData = await getApis.getAllMessages(); 
        const sortedMessages = messagesData?.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        console.log(sortedMessages)
        setMessages(sortedMessages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching messages:", error);
        setLoading(false);
      }
    };

    fetchAllMessages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container style={{ height: "calc(100vh - 140px)", overflowY: "auto" }}>
      <div>
        {messages?.map((message, i) => (
          <StyledMessageCard key={i}>
            <MessageHead  >
              <Avatar src={AssetIcons.Avatar} alt="avatar"  />
              <div >
                <SenderName  >Rishabh</SenderName>
                <OtpInfo  >Text: {message?.text.length > 15 ? message?.text.slice(0, 15) + "..." : message?.text}</OtpInfo>
              </div>
            </MessageHead>
            <TimeStamp  >{format(new Date(message?.created_at), "h:mm a do MMMM yyyy")}</TimeStamp>
          </StyledMessageCard>
        ))}
      </div>
    </Container>
  );
};

export default MessageCard;
