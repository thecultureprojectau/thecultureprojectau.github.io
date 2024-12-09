import React from "react";
import { BannerLinkButton } from "./BannerLinkButton";
import * as styles from "./navLinks.module.css";

export const NavLinks: React.FC = () => {
  return (
    <div className={styles.bannerLinksContainer}>
      <BannerLinkButton linkPath="/" label="WHERE ARE WE?" />
      <BannerLinkButton linkPath="/the-journey" label="THE JOURNEY" />
      <BannerLinkButton linkPath="/is-cp-for-me" label="IS CP FOR ME?" />
      <BannerLinkButton
        linkPath="/leaders-immersion-program"
        label="LEADERS IMMERSION PROGRAM"
      />
      <BannerLinkButton linkPath="/partners" label="PARTNERS" />
    </div>
  );
};
