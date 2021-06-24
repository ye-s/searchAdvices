import { FC } from "react";
import "./AdviceItem.scss";
import { Advice } from "../AdvicesTypes";

export const AdviceItem: FC<Advice> = ({ advice }: Advice) => {
  return <p className="advice">"{advice}"</p>;
};
