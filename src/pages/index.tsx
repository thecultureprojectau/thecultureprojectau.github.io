import * as React from "react";
import { type PageProps } from "gatsby";

// images
import cpLogo from "../images/CP_Logo_modified.png";
import image17PctYoungWomen from "../images/CP_WebImages3.png";
import image25PctYoungMen from "../images/CP_WebImages4.png";
import image31PctMales from "../images/CP_WebImages5.png";
import image49PctUpperHighSchoolers from "../images/CP_WebImages6.png";
import image30PctDivorceRate from "../images/CP_WebImages7.png";

import * as styles from "./index.module.css";
import {
  BannerLinkButton,
  BannerLinkInlineContainer,
} from "../components/nav/BannerLinkButton";
import {
  Col,
  Divider,
  GrayText,
  H1Orange,
  H1Red,
  PageFooter,
  PageHead,
  Row,
  rubikDirtFont,
  WantToHearMoreSection,
  WhiteText,
} from "../components/common";
import { NavLinks } from "../components/nav";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className={styles.bannerContainer}>
        <NavLinks />
        <div>
          <center>
            <img src={cpLogo} alt="Culture Project Logo" width={300} />
          </center>
        </div>
        <div className={styles.bannerTitleContainer} style={rubikDirtFont}>
          <center>
            <h1>
              Where
              <br />
              are we?
            </h1>
          </center>
        </div>
      </div>

      <Row>
        <div className={styles.choicesImageContainer}>
          <div className={styles.choicesImage} />
        </div>
        <Col>
          <H1Red>We have more choices and options than ever before</H1Red>
          <GrayText>
            We hear so many opinions: What does it mean to be happy? What is
            living your best life? What is a good relationship? What is real
            love? What makes friendships work? Are all goals good or only some?
            How can I work towards things that do me good and not harm?
          </GrayText>
        </Col>
      </Row>

      <Row flex={false}>
        <div>
          <H1Orange>Quiz Time!</H1Orange>
          <GrayText>Take the quiz to see what others think</GrayText>
        </div>
        <br />
        <div className={styles.quizComponent}>
          <div>"Quiz component goes here"</div>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div>
          <GrayText>
            There has never been more talk about choices, life goals,
            relationships, mental health, being connected, sex, social life and
            living your best life. But at the same time, it feels like these
            things are getting harder to figure out.{" "}
          </GrayText>
        </div>
      </Row>

      <Row flex={false}>
        <div>
          <H1Orange>Stats</H1Orange>
        </div>
        <div className={styles.statsSection}>
          <div>
            <img src={image31PctMales} className={styles.statsIcon} />
          </div>
          <div>
            <img
              src={image49PctUpperHighSchoolers}
              className={styles.statsIcon}
            />
          </div>
          <div className={styles.statsGrayText}>
            Reported experiencing unwanted sexual behaviour
          </div>
        </div>
        <Divider />
        <div className={styles.statsSection}>
          <div>
            <img src={image30PctDivorceRate} className={styles.statsIcon} />
          </div>
          <div className={styles.statsGrayText}>
            The number of Australian marriages ending in divorce
          </div>
        </div>
        <Divider />
        <div className={styles.statsSection}>
          <div>
            <img src={image17PctYoungWomen} className={styles.statsIcon} />
          </div>
          <div>
            <img src={image25PctYoungMen} className={styles.statsIcon} />
          </div>
          <div className={styles.statsGrayText}>
            Number of people experiencing social isolation.
          </div>
        </div>
        <Divider />
      </Row>

      <div className={styles.whereAreWeGoingSection}>
        <Row flex={false}>
          <div className={styles.whereAreWeGoingSection_Text1}>
            <div className={styles.bannerTitleContainer} style={rubikDirtFont}>
              <h1>Where are we Going?</h1>
            </div>
          </div>
          <p className={styles.whereAreWeGoingSection_Text2}>
            <GrayText>
              The Culture Project believes that genuine freedom is achievable,
              that a fulfilling life is not an accident, that real love is
              possible, that we can learn what makes friendships great, that our
              lives are built for meaning, that each of us matters more than we
              know, and that we can become people who build relationships,
              friendships, families and communities full of growth, life and
              love.
            </GrayText>
          </p>
          <div>
            Go to{" "}
            <BannerLinkInlineContainer>
              <BannerLinkButton
                linkPath="some"
                label="THE JOURNEY"
                withBorder
              />
            </BannerLinkInlineContainer>
            to see what why we think this.
          </div>
        </Row>
      </div>

      <WantToHearMoreSection />

      <PageFooter />
    </main>
  );
};

export default IndexPage;

export const Head = PageHead;
