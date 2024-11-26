import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const pageStyles = {
  backgroundColor: "#FFFFFF",
  fontFamily: "Outfit, -apple-system, Roboto, sans-serif, serif",
  fontWeight: 400,
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const doclistStyles = {
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  },
];

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
];

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
  return <span className={styles.grayText}>{props.children}</span>;
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
