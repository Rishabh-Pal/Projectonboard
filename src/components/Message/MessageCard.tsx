import { useEffect, useState } from "react";
import { getApis } from "../../services";
import { Container, StyledMessageCard } from "./MessageStyle";
import { GetAllMessage } from "../../typing"; 
import AssetIcons from "../../assets";

const MessageCard = () => {
  const [messages, setMessages] = useState<GetAllMessage[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllMessages = async () => {
      try {
        const messagesData = await getApis.getAllMessages(); 
        const sortedMessages = messagesData?.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
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
            <div className="message-header">
              <img src={AssetIcons.Avatar} alt="avatar" className="avatar" />
              <div className="sender-info">
                <div className="sender-name">Rishabh</div>
                <div className="otp-info">Text: {message?.text}</div>
              </div>
            </div>
            <div className="timestamp">{message?.created_at}</div>
          </StyledMessageCard>
        ))}
      </div>
    </Container>
  );
};

export default MessageCard;
