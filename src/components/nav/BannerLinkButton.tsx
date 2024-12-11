import { Link } from "gatsby-link";
import React from "react";
import * as styles from "./BannerLinkButton.module.css";
import { linkConstantsMap, LinkPathType } from "./linksConstants";

interface Props {
  linkPath: LinkPathType;
  withBorder?: boolean;
  invertColor?: boolean;
}

export const BannerLinkButton: React.FC<Props> = (props) => {
  const { linkPath, withBorder = false, invertColor = false } = props;
  const label = linkConstantsMap[linkPath];

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
