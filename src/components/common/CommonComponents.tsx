import * as React from "react";
import * as styles from "./commonComponents.module.css";

export const H1Red: React.FC<{ children: React.ReactNode }> = (props) => {
  return <h1 className={styles.h1Red}>{props.children}</h1>;
};

export const H1Orange: React.FC<{ children: React.ReactNode }> = (props) => {
  return <h1 className={styles.h1Orange}>{props.children}</h1>;
};

export const GrayText: React.FC<{ children: React.ReactNode }> = (props) => {
  return <p className={styles.grayText}>{props.children}</p>;
};

export const Divider: React.FC = () => {
  return <div className={styles.divider}></div>;
};

export const WhiteText: React.FC<{ children: React.ReactNode }> = (props) => {
  return <p className={styles.whiteText}>{props.children}</p>;
};
