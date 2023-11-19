/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ComponentConfig } from "@measured/puck";
import styles from "./styles.module.css";

export type CardProps = {
  title: string;
  description: string;
};

export const Card: ComponentConfig<CardProps> = {
  fields: {
    title: { type: "text" },
    description: { type: "textarea" },
  },
  defaultProps: {
    title: "Title",
    description: "Description",
  },
  render: ({ title, description }) => {
    return (
      <div className={styles.Card}>
        <div className={styles.CardTitle}>{title}</div>
        <div className={styles.CardDescription}>{description}</div>
      </div>
    );
  },
};
