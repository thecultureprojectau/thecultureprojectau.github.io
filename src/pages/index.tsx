import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const pageStyles = {
  backgroundColor: "#FFFFFF",
  fontFamily: "Outfit, -apple-system, Roboto, sans-serif, serif",
  fontWeight: 400,
};

const bannerCpLogo = {};
const cpLogoStyle = {};

const rubikDirtFont = {
  fontFamily: "Rubik Dirt",
  fontWeight: 600,
  color: "#ca4037",
  textTransform: "uppercase",
};

import cpLogo from "../images/Transparent Background_CP_Logo_2024-02.png";

import * as styles from "./index.module.css";
import { BannerLinkButton } from "../components/page-index/BannerLinkButton";

const H1Red: React.FC<{ children: React.ReactNode }> = (props) => {
  return <h1 className={styles.h1Red}>{props.children}</h1>;
};

const H1Orange: React.FC<{ children: React.ReactNode }> = (props) => {
  return <h1 className={styles.h1Orange}>{props.children}</h1>;
};

const GrayText: React.FC<{ children: React.ReactNode }> = (props) => {
  return <p className={styles.grayText}>{props.children}</p>;
};

const Divider: React.FC = () => {
  return <div className={styles.divider}></div>;
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      {/* banner */}
      <div className={styles.bannerContainer}>
        <div className={styles.bannerLinksContainer}>
          <BannerLinkButton linkPath="some" label="WHERE ARE WE?" />
          <BannerLinkButton linkPath="some" label="THE JOURNEY" />
          <BannerLinkButton linkPath="some" label="IS CP FOR ME?" />
          <BannerLinkButton linkPath="some" label="LEADERS IMMERSION PROGRAM" />
          <BannerLinkButton linkPath="some" label="PARTNERS" />
        </div>
        <div style={bannerCpLogo}>
          <center>
            <img
              style={cpLogoStyle}
              src={cpLogo}
              alt="Culture Project Logo"
              width={300}
            />
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

      <div className={styles.row}>
        <div className={styles.choicesImageContainer}>
          <div className={styles.choicesImage} />
        </div>
        <div className={styles.col}>
          <H1Red>We have more choices and options than ever before</H1Red>
          <GrayText>
            We hear so many opinions: What does it mean to be happy? What is
            living your best life? What is a good relationship? What is real
            love? What makes friendships work? Are all goals good or only some?
            How can I work towards things that do me good and not harm?
          </GrayText>
        </div>
      </div>

      <div className={styles.rowNonFlex}>
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
      </div>

      <div className={styles.rowNonFlex}>
        <div>
          <H1Orange>Stats</H1Orange>
        </div>
        <div className={styles.statsSection}>
          <div>*Pie chart here</div>
          <div className={styles.statsGrayText}>
            Reported experiencing unwanted sexual behaviour
          </div>
        </div>
        <Divider />
        <div className={styles.statsSection}>
          <div>*Pie chart here</div>
          <div className={styles.statsGrayText}>
            The number of Australian marriages ending in divorce
          </div>
        </div>
        <Divider />
        <div className={styles.statsSection}>
          <div>*Pie chart here</div>
          <div className={styles.statsGrayText}>
            Number of people experiencing social isolation.
          </div>
        </div>
        <Divider />
      </div>

      <div className={styles.whereAreWeGoingSection}>
        <div className={styles.whiteFadeDiv}></div>
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
            friendships, families and communities full of growth, life and love.
          </GrayText>
        </p>
        <div className={styles.theJourneyText}>
          Go to{" "}
          <div className={styles.theJourneyCtaInline}>
            <BannerLinkButton linkPath="some" label="THE JOURNEY" withBorder />
          </div>
          to see what why we think this.
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Home Page</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Rubik+Dirt&display=swap"
      rel="stylesheet"
    />
  </>
);
