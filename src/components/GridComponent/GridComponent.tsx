import { useEffect, useState } from "react";
import { Grid, Col, Row } from "@zendeskgarden/react-grid";
import ContactInfo from "../Contacts/ContactInfo/ContactInfo";
import ContactCompose from "../Contacts/ContactCompose/ContactCompose";
import MessageCard from "../Message/MessageCard";
import themePalette from "../../theme/theme";
import { getApis } from "../../services";
import { GetAllContacts } from "../../typing";
import ContactList from "../Contacts/ContactList/ContactList";
import {
  GridHead,
  Head,
  Header,
  Heading,
  Menu,
  SideStyle,
  Span,
  StyledMenuItem,
} from "./GridCompStyle";
import AssetIcons from "../../assets";

const GridComponent = () => {
  const [activeSection, setActiveSection] = useState("contact");
  const [infoColumnVisible, setInfoColumnVisible] = useState(false);
  const [composeVisible, setComposeVisible] = useState(false);
  const [contacts, setContacts] = useState<GetAllContacts[]>();
  const [selectedContact, setSelectedContact] = useState<GetAllContacts>();

  const handleSectionChange = (section: string) => {
    setInfoColumnVisible(false);
    setComposeVisible(false);

    setActiveSection(section);
  };

  const handleToggleInfoColumn = (selectedUserId: number) => {
    const selectedContact = contacts?.find(
      (contact) => contact.userId === selectedUserId
    );
    if (selectedContact) {
      setSelectedContact(selectedContact);
    }
    setInfoColumnVisible((prevVisible) => !prevVisible);
    setComposeVisible(false);
  };

  const handleShowCompose = () => {
    setComposeVisible((p) => !p);
  };

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contactsData = await getApis.getAllContacts();
        setContacts(contactsData);
        console.log(contacts, ": all contacts");
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
    fetchContacts();
  }, []);
  console.log(contacts, ": all contacts");
  return (
    <Grid
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflowY: "hidden",
      }}
    >
      <Row  >
        <Col size={2}
          style={{
            backgroundColor: themePalette.colors.primarywhite,
            height: "100vh", 
          }}
        >
          <SideStyle>
            <Menu>Menu</Menu>
            <StyledMenuItem
              active={activeSection === "contact"}
              onClick={() => handleSectionChange("contact")}
            >
              <img src={AssetIcons.User} alt="u" />
              <Span>Contacts</Span>
              
            </StyledMenuItem>
            <StyledMenuItem
              active={activeSection === "messages"}
              onClick={() => handleSectionChange("messages")}
            >
              <img src={AssetIcons.MessageIcon} alt="m" />
              <Span>Messages</Span>
            </StyledMenuItem>
          </SideStyle>
        </Col>
        <Col>
          <Row>
            <Heading>
              <Head>
                {activeSection === "contact" ? "Contacts" : "Messages"}
              </Head>
              <Header />
            </Heading>
          </Row>
          <Row style={{ flex: 1, height: "100vh"}}>
            <Col size={4} style={{ borderRight: "2px solid #ccc"}}>
              <GridHead>List</GridHead>
              {/* // grid */}
              {activeSection === "contact" ? (
                <div>
                  {contacts?.map((data: GetAllContacts) => (
                    <div key={data.userId}>
                      <ContactList
                        data={data}
                        onArrowClick={() => handleToggleInfoColumn(data.userId)}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <MessageCard />
                  <MessageCard />
                  <MessageCard />
                  <MessageCard />
                </div>
              )}
            </Col>
            {infoColumnVisible && selectedContact && (
            <Col size={4}
              style={{ borderRight: `2px solid ${themePalette.colors.border}` }}
            >
                <>
                  <GridHead>Info</GridHead>
                  <div>
                    <ContactInfo
                      isVisible={infoColumnVisible}
                      onShowCompose={handleShowCompose}
                      data={selectedContact}
                    />
                  </div>
                </>
            </Col>
              )}
              {composeVisible && (
            <Col size={4}>
                <div>
                  <GridHead>Compose</GridHead>
                  <div>
                    <ContactCompose
                      isVisible={composeVisible}
                      id={selectedContact?.userId ?? 0}
                    />
                  </div>
                </div>
            </Col>
              )}
          </Row>
        </Col>
      </Row>
    </Grid>
  );
};

export default GridComponent;
