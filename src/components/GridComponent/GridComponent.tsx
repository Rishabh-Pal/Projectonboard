import React, {useEffect, useState } from "react";
import {Grid, Col, Row} from "@zendeskgarden/react-grid";
import ContactInfo from "../Contacts/ContactInfo/ContactInfo";
import ContactCompose from "../Contacts/ContactCompose/ContactCompose";
import MessageCard from "../Message/MessageCard";
import themePalette from "../../theme/theme"; 
import { getApis } from "../../services";
import { GetAllContacts } from "../../typing";
import ContactList from "../Contacts/ContactList/ContactList";
import { SideStyle, StyledMenuItem } from "./GridCompStyle";
import AssetIcons from "../../assets";
 

const GridComponent: React.FC = () => {
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
    <Grid style={{ overflowY: "hidden" }}>
      <Row>
        <Col
          size={2}
          style={{
            backgroundColor: themePalette["primary-white"],
            height: "100vh",
          }}
        >
          <SideStyle>
            <div
              style={{
                textAlign: "left",
                margin: "20px 20px",
                fontSize: "32px",
                fontWeight: "700",
              }}
            >
              Menu
            </div>
            <StyledMenuItem
              active={activeSection === "contact"}
              onClick={() => handleSectionChange("contact")}
            >
              <img src={AssetIcons.User} alt="u" />
              Contacts
            </StyledMenuItem>
            <StyledMenuItem
              active={activeSection === "messages"}
              onClick={() => handleSectionChange("messages")}
            >
              <img src={AssetIcons.MessageIcon} alt="m" />
              Messages
            </StyledMenuItem>
          </SideStyle>
        </Col>
        <Col>
          <Row>
            <div
              className="heading"
              style={{ width: "100%", textAlign: "left" }}
            >
              <div
                style={{
                  marginLeft: "20px",
                  margin: "20px",
                  fontSize: "32px",
                  fontWeight: "600",
                }}
              >
                {activeSection === "contact" ? "Contacts" : "Messages"}
              </div>
              <div style={{ border: "2px solid #d9d9d9" }}></div>
            </div>
          </Row>
          <Row>
            <Col style={{ borderRight: "2px solid #ccc" ,overflowY: "auto"}}>
              <div
                className="grid-head"
                style={{
                  fontSize: "20px",
                  marginLeft: "20px",
                  margin: "20px",
                  fontWeight: "bold",
                  textAlign: "left",
                  color: themePalette["hed-text-gray"],
                }}
              >
                List
              </div>
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
            <Col style={{ borderRight: "2px solid #ccc" , overflowY: "auto"}}>
              {infoColumnVisible && selectedContact && (
                <>
                  <div
                    className="grid-head"
                    style={{
                      fontSize: "20px",
                      marginLeft: "20px",
                      margin: "20px",
                      fontWeight: "bold",
                      textAlign: "left",
                      color: themePalette["hed-text-gray"],
                    }}
                  >
                    Info
                  </div>
                  <div>
                    <ContactInfo
                      isVisible={infoColumnVisible}
                      onShowCompose={handleShowCompose}
                      data={selectedContact}
                    />
                  </div>
                </>
              )}
            </Col>
            <Col style={{overflowY: "auto"}}>
              {composeVisible && (
                <div>
                  <div
                    className="grid-head"
                    style={{
                      fontSize: "20px",
                      marginLeft: "20px",
                      margin: "20px",
                      fontWeight: "bold",
                      textAlign: "left",
                      color: themePalette["hed-text-gray"],
                    }}
                  >
                    Compose
                  </div>
                  <div>
                    <ContactCompose
                      isVisible={composeVisible}
                      id={selectedContact?.userId ?? 0}
                    />
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  );
};

export default GridComponent;
