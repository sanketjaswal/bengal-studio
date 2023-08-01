import React from "react";
import "./F4Comp.css";
import { Text, TabHead } from "../Text/text.styled";
import { NormalButtonSmall, FancyButtonSmall } from "../Button/Button.styled";

export const F4Tab = ({ heading, subtext, cls }) => {
  return (
    <div className="F4Tab">
      <div className={`TabImg ${cls}`}></div>
      <div className="F4TextHolder">
        <TabHead>{heading}</TabHead>
        <Text>{subtext}</Text>
      </div>
      <div className="F4BtnHolder">
        <FancyButtonSmall>Try now</FancyButtonSmall>
        <NormalButtonSmall>Explore now</NormalButtonSmall>
      </div>
    </div>
  );
};
