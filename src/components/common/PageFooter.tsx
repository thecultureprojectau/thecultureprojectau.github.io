import * as styles from "./PageFooter.module.css";

import { Link } from "gatsby";
import React from "react";
import { Row, Col, Divider } from "./CommonComponents";

import cpLogo from "../../images/CP_Logo_modified.png";
import socialFbLogo from "../../images/CP_WebImages8.png";
import socialTwitterLogo from "../../images/CP_WebImages9.png";
import socialInstagramLogo from "../../images/CP_WebImages10.png";
import socialYoutubeLogo from "../../images/CP_WebImages11.png";
import { linkConstantsMap, LinkPathType } from "../nav/linksConstants";

export const PageFooter: React.FC = () => {
  return (
    <div className={styles.footer}>
      <Row>
        <img src={cpLogo} alt="Culture Project Logo" width={200} />
      </Row>

      <Row>
        <Col>
          Contact Us
          <br />
          <br />
          PO. Box 00
          <br />
          Sydney 2000
          <br />
          <br />
          1800 000 0000
          <br />
          <br />
          <a href="mailto:aleach@thecultureproject.com.au">
            aleach@thecultureproject.com.au
          </a>
        </Col>
        <Col>
          <FooterRedText>Online Community</FooterRedText>
          <a
            href="https://www.facebook.com/cultureprojectaustralia"
            target="_blank"
          >
            <div className={styles.socialLinkContainer}>
              <img src={socialFbLogo} className={styles.socialLogo} />
              /cultureprojectaustralia
            </div>
          </a>
          <a href="https://x.com/restoreau" target="_blank">
            <div className={styles.socialLinkContainer}>
              <img src={socialTwitterLogo} className={styles.socialLogo} />
              /cultureproj_au
            </div>
          </a>
          <a href="https://www.instagram.com/cultureproj_au/" target="_blank">
            <div className={styles.socialLinkContainer}>
              <img src={socialInstagramLogo} className={styles.socialLogo} />
              /cultureproj_au
            </div>
          </a>
          <a
            href="https://www.youtube.com/@thecultureprojectaustralia6153"
            target="_blank"
          >
            <div className={styles.socialLinkContainer}>
              <img src={socialYoutubeLogo} className={styles.socialLogo} />
              The Culture Project Australia
            </div>
          </a>
        </Col>
        <Col>
          <InlineLink linkPath="/" />
          <br />
          <InlineLink linkPath="/is-cp-for-me" />
          <br />
          <InlineLink linkPath="/leaders-immersion-program" />
          <br />
        </Col>
      </Row>
      <Divider />
      <Row>
        <p>
          © 2024 The Culture Project Australia. All Rights Reserved. • The
          Culture Project Australia is a nonprofit organization. Your
          contribution is tax-deductible to the fullest extent permitted by law.
          • No goods or services were received in exchange for your contribution
        </p>
      </Row>
    </div>
  );
};

const InlineLink: React.FC<{ linkPath: LinkPathType }> = (props) => {
  const { linkPath } = props;
  return (
    <Link to={linkPath}>
      <FooterRedText>{linkConstantsMap[linkPath]}</FooterRedText>
    </Link>
  );
};

const FooterRedText: React.FC<{ children: React.ReactNode }> = (props) => {
  return <text className={styles.footerRedText}>{props.children}</text>;
};
