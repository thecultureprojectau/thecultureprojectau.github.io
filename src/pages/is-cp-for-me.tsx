import React from "react";
import {
  Col,
  GrayText,
  H1Orange,
  H1Red,
  PageHead,
  Row,
  rubikDirtFont,
} from "../components/common";
import {
  BannerLinkButton,
  BannerLinkInlineContainer,
  NavLinks,
} from "../components/nav";
import * as styles from "./is-cp-for-me.module.css";

import cpLogo from "../images/CP_Logo_modified.png";

const IsCPForMePage: React.FC = () => {
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
              Is
              <br />
              CP
              <br />
              for me?
            </h1>
          </center>
        </div>
      </div>

      <Row>
        <H1Red>WHY WOULD I WANT TO TRY THE CULTURE PROJECT?</H1Red>
      </Row>
      <Row layoutColReverse>
        <Col>
          Culture Project is for anyone who asks themselves these questions:
        </Col>
        <Col>image here</Col>
      </Row>

      <Row>grid content here</Row>

      <Row flex={false}>
        <center>
          If these questions matter to you, here’s how you can go further:
        </center>
      </Row>

      <Row layoutColReverse>
        <Col>
          <H1Orange>Wanderlust Series</H1Orange>
          Culture Project runs a series of gatherings for young adults to dive
          into specific issues like love & relationships,
          masculinity/femininity, identity, purpose and healing. Each Wanderlust
          runs for 5-6 weeks and features input from CP leaders, in-depth ideas
          and discussion and time in incredible locations, all with a group of
          other young adults seeking the same things.
          <br />
          <br />
          Check out our{" "}
          <BannerLinkInlineContainer>
            <BannerLinkButton linkPath="some" label="EVENTS" withBorder />
          </BannerLinkInlineContainer>{" "}
          page or follow our Instagram/Facebook for details.
        </Col>
        <Col>image here</Col>
      </Row>

      <Row>
        <Col>image here</Col>
        <Col>
          <H1Orange>Spring Conference</H1Orange>
          Each spring, the Culture Project runs a 4 day conference for 18-30
          year olds where we can go deeper into how to find freedom, purpose,
          friendship and love, all while meeting new people.
          <br />
          <br />
          Check out our{" "}
          <BannerLinkInlineContainer>
            <BannerLinkButton linkPath="some" label="EVENTS" withBorder />
          </BannerLinkInlineContainer>{" "}
          page or follow our Instagram/Facebook for details.
        </Col>
      </Row>

      <Row layoutColReverse>
        <Col>
          <H1Orange>WINTER RETREAT</H1Orange>
          Once a year in winter, those who want to do some interior work gather
          for 3 days of focus, learning, self- reflection and growth, all led by
          other young people who want the same things.
          <br />
          <br />
          Check out our{" "}
          <BannerLinkInlineContainer>
            <BannerLinkButton linkPath="some" label="EVENTS" withBorder />
          </BannerLinkInlineContainer>{" "}
          page or follow our Instagram/Facebook for details.
        </Col>
        <Col>image here</Col>
      </Row>

      <div className={styles.whereAreWeGoingSection}>
        <Row flex={false}>
          <div className={styles.whereAreWeGoingSection_Text1}>
            <div>
              <H1Orange>The Leaders Immersion Program</H1Orange>
            </div>
          </div>
          <p className={styles.whereAreWeGoingSection_Text2}>
            <GrayText>
              At the heart of the Culture Project is a group of 18- 30 year-olds
              who decide to immerse themselves in learning about their identity,
              their purpose in life, their desires and their gifts, all lived
              out in community. This is the Leaders Immersion Program.
            </GrayText>
          </p>
          <div>
            Go to{" "}
            <BannerLinkInlineContainer>
              <BannerLinkButton
                linkPath="some"
                label="LEADERS IMMERSION PROGRAM"
                withBorder
              />
            </BannerLinkInlineContainer>
            to find out more.
          </div>
        </Row>
      </div>
    </main>
  );
};

export default IsCPForMePage;

export const Head = PageHead;
