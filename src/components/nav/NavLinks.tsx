import React from "react";
import { BannerLinkButton } from "./BannerLinkButton";
import * as styles from "./navLinks.module.css";

interface NavLinksProps {
  invertColor?: boolean;
}

export const NavLinks: React.FC<NavLinksProps> = (props) => {
  const { invertColor = false } = props;

  return (
    <div className={styles.bannerLinksContainer}>
      <BannerLinkButton
        linkPath="/"
        label="WHERE ARE WE?"
        invertColor={invertColor}
      />
      <BannerLinkButton
        linkPath="/the-journey"
        label="THE JOURNEY"
        invertColor={invertColor}
      />
      <BannerLinkButton
        linkPath="/is-cp-for-me"
        label="IS CP FOR ME?"
        invertColor={invertColor}
      />
      <BannerLinkButton
        linkPath="/leaders-immersion-program"
        label="LEADERS IMMERSION PROGRAM"
        invertColor={invertColor}
      />
      <BannerLinkButton
        linkPath="/partners"
        label="PARTNERS"
        invertColor={invertColor}
      />
    </div>
  );
};
