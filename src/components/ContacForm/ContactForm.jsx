import React from "react";
import {
  Button,
  ContactInfo,
  ContactWrapper,
  Info,
  Input,
  Map,
  Row,
  Textarea,
} from "../../styles/ContacForm/ContactForm";

const ContactForm = () => {
  return (
    <>
      <ContactWrapper>
        <h2>Contáctanos</h2>
        <Row>
          <Input placeholder="Nombre" />
          <Input placeholder="Apellido" />
        </Row>
        <Row>
          <Input placeholder="Teléfono" />
          <Input placeholder="Empresa" />
        </Row>
        <Input placeholder="E-mail" />
        <Textarea placeholder="Mensaje" />
        <Button>Enviar</Button>
      </ContactWrapper>
      <Info>
        <ContactInfo>
          <div>
            <div>
              <strong>Full Slab</strong>
            </div>
            <div>
              <span>+54 (3489) 547171</span>
            </div>
            <div>
              <span>ventas@fullslab.com.ar</span>
            </div>
          </div>
        </ContactInfo>
        <Map>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.26794672713!2d-58.976494223480316!3d-34.16506643446626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb73b62697c0f9%3A0x68e38487b71f7a5a!2sFray%20Luis%20Beltr%C3%A1n%20461%2C%20Campana%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1697751755049!5m2!1ses-419!2sar"
            title="Fray Luis Beltran 461"
          ></iframe>
        </Map>
      </Info>
    </>
  );
};

export default ContactForm;
