import React from "react";
import {
  ContactButton,
  ContactContainer,
  ContactDetail,
  ContactDiv,
  ContactIcon,
  ContactLeft,
  ContactMapContainer,
  ContactMode,
  ContactModes,
  ContactRight,
  ContactRow,
  ContactWrapper,
} from "../../styles/Contact/Contact";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactContainer>
        <ContactLeft>
          <span className="orangeText">Contactese con nosotros</span>
          <span className="primaryText">Fácil Contacto</span>
          <span className="secondaryText">Estamos listos para ayudarte.</span>
          <ContactModes>
            <ContactRow>
              <ContactMode>
                <ContactDiv>
                  <ContactIcon>
                    <MdCall size={25} />
                  </ContactIcon>
                  <ContactDetail>
                    <span className="primaryText">Llamar</span>
                    <span className="secondaryText">+54 3489 534220</span>
                  </ContactDetail>
                </ContactDiv>
                <ContactButton>
                  <a href="tel:+543489534220" className="button">
                    Llamar Ahora
                  </a>
                </ContactButton>
              </ContactMode>
              <ContactMode>
                <ContactDiv>
                  <ContactIcon>
                    <BsFillChatDotsFill size={25} />
                  </ContactIcon>
                  <ContactDetail>
                    <span className="primaryText">Chatear</span>
                    <span className="secondaryText">+54 3489 534220</span>
                  </ContactDetail>
                </ContactDiv>
                <ContactButton>
                  <a href="tel:+543489534220" className="button">
                    Chatear Ahora
                  </a>
                </ContactButton>
              </ContactMode>
            </ContactRow>
            <ContactRow>
              <ContactMode>
                <ContactDiv>
                  <ContactIcon>
                    <HiChatBubbleBottomCenter size={25} />
                  </ContactIcon>
                  <ContactDetail>
                    <span className="primaryText">Mensaje</span>
                    <span className="secondaryText">+54 3489 534220</span>
                  </ContactDetail>
                </ContactDiv>
                <ContactButton>
                  <a href="sms:+543489534220" className="button">
                    Enviar Mensaje
                  </a>
                </ContactButton>
              </ContactMode>
              <ContactMode>
                <ContactDiv>
                  <ContactIcon>
                    <BsFillChatDotsFill size={25} />
                  </ContactIcon>
                  <ContactDetail>
                    <span className="primaryText">Email</span>
                    <span className="secondaryText">
                      ventas@fullslab.com.ar
                    </span>
                  </ContactDetail>
                </ContactDiv>
                <ContactButton>
                  <a href="mailto:ventas@fullslab.com.ar" className="button">
                    Enviar mail
                  </a>
                </ContactButton>
              </ContactMode>
            </ContactRow>
          </ContactModes>
        </ContactLeft>
        <ContactRight>
          <ContactMapContainer>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.26794672713!2d-58.976494223480316!3d-34.16506643446626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb73b62697c0f9%3A0x68e38487b71f7a5a!2sFray%20Luis%20Beltr%C3%A1n%20461%2C%20Campana%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1697751755049!5m2!1ses-419!2sar"></iframe>
          </ContactMapContainer>
        </ContactRight>
      </ContactContainer>
    </ContactWrapper>
  );
};

export default Contact;
