import React, { useState } from "react";
import themePalette from "../../../theme/theme"; 
import { postApis } from "../../../services";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Container, ContactComposeWrapper, ComposeInput, ComposeFooter, GenerateOTP, SendButton, SendIcon } from "./ComposeStyle";
import AssetIcons from "../../../assets";

interface ContactComposeProps {
  isVisible: boolean;
  id: number ;
}


const ContactCompose: React.FC<ContactComposeProps> = ({ isVisible, id }) => {
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    try {
      if (message.length !== 0) {
        const response = await postApis.createMessages(id, message);
        console.log('Complete response:', response);
        if (response && response.id) {
          console.log(response.id, "Message sent successfully!");
          toast.success("Message sent successfully!");
        } else {
          console.log("There is an error in the response.");
          toast.error("Failed to send message. Please try again.");
        }
        setMessage('');
      } else {
        toast.error("Message is empty!, Please fill the message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };
  

  return (
    <Container isVisible={isVisible}>
      <ContactComposeWrapper>
        <ComposeInput
          type="text"
          value={message}
          placeholder="Hi, Your OTP is: 12345"
          onChange={(e) => setMessage(e.target.value)} 
        />
        <ComposeFooter>
          <GenerateOTP style={{ color: themePalette.colors.primblue }}>
            Generate another OTP
          </GenerateOTP>
          <SendButton onClick={handleSend}>
            <SendIcon src={AssetIcons.Send} alt="send" />
            Send
          </SendButton>
        </ComposeFooter>
      </ContactComposeWrapper>
      <ToastContainer />
    </Container>
  );
};

export default ContactCompose;
