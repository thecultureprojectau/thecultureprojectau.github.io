import { Link } from "gatsby-link";
import React from "react";
import * as styles from "./BannerLinkButton.module.css";

interface Props {
  linkPath: string;
  label: string;
}

export const BannerLinkButton: React.FC<Props> = (props) => {
  const { linkPath, label } = props;

  return (
    <Link to={linkPath} className={styles.link}>
      <button className={styles.btn}>{label}</button>
    </Link>
  );
};
