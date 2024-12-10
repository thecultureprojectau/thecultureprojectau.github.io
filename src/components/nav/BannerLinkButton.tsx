import { Link } from "gatsby-link";
import React from "react";
import * as styles from "./BannerLinkButton.module.css";

interface Props {
  linkPath: string;
  label: string;
  withBorder?: boolean;
  invertColor?: boolean;
}

export const BannerLinkButton: React.FC<Props> = (props) => {
  const { linkPath, label, withBorder = false, invertColor = false } = props;

  return (
    <Link to={linkPath}>
      <button
        className={`${styles.btn} ${invertColor && styles.btnInvertColor}`}
        style={withBorder ? { outlineWidth: "2px" } : {}}
      >
        {label}
      </button>
    </Link>
  );
};

export const BannerLinkInlineContainer: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  return (
    <div className={styles.bannerLinkInlineContainer}>{props.children}</div>
  );
};
