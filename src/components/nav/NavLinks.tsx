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
      <BannerLinkButton linkPath="/" invertColor={invertColor} />
      {/* <BannerLinkButton linkPath="/the-journey" invertColor={invertColor} /> */}
      <BannerLinkButton linkPath="/is-cp-for-me" invertColor={invertColor} />
      <BannerLinkButton
        linkPath="/leaders-immersion-program"
        invertColor={invertColor}
      />
      {/* <BannerLinkButton linkPath="/partners" invertColor={invertColor} /> */}
    </div>
  );
};
