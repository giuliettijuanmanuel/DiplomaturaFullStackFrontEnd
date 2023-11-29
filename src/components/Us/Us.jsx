import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/Accordion";
import { UsContainer, UsLeft, UsRight, UsWrapper } from "../../styles/Us/Us";
import { BannerImageContainer } from "../../styles/Hero/Hero";

const Us = () => {
  return (
    <UsWrapper>
      <UsContainer>
        <UsLeft>
          <BannerImageContainer>
            <img src="./images/banner03.jpg" alt="Banner" />
          </BannerImageContainer>
        </UsLeft>
        <UsRight>
          <span className="orangeText">Full Slab</span>
          <span className="primaryText">Acerca de Nosotros</span>
          <span className="secondaryText">
            Siempre estamos listos para ayudar brindándole los mejores
            servicios.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem className={`accordionItem ${className}`} key={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>

                      <div className="icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="accordionPanel">
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </UsRight>
      </UsContainer>
    </UsWrapper>
  );
};

export default Us;
