import { Link } from "gatsby-link";
import React from "react";
import * as styles from "./BannerLinkButton.module.css";

interface Props {
  linkPath: string;
  label: string;
  withBorder?: boolean;
}

export const BannerLinkButton: React.FC<Props> = (props) => {
  const { linkPath, label, withBorder = false } = props;

  return (
    <Link to={linkPath} className={styles.link}>
      <button
        className={styles.btn}
        style={withBorder ? { outlineWidth: "2px" } : {}}
      >
        {label}
      </button>
    </Link>
  );
};
