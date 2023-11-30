import React from "react";
import { NovedadesWrapper } from "../../styles/Novedades/Novedades";

const NovedadItem = (props) => {
  const { title, subtitle, imagen, body } = props;
  return (
    <>
      <NovedadesWrapper>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
        <img src={imagen} alt={title} />
        <div dangerouslySetInnerHTML={{ __html: body }} />
        <hr />
      </NovedadesWrapper>
    </>
  );
};

export default NovedadItem;
