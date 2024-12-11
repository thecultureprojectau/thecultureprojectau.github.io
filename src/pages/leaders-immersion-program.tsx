import React from "react";
import {
  Col,
  H1Orange,
  H1Red,
  PageFooter,
  PageHead,
  Row,
  rubikDirtFont,
  WantToHearMoreSection,
} from "../components/common";
import { NavLinks } from "../components/nav";
import * as styles from "./leaders-immersion-program.module.css";

import cpLogo from "../images/CP_Logo_modified.png";
import howDoesTheLPYearFitInImg from "../images/leaders-immersion-program/Gibson Images10.png";
import howDoesTheLPYearUnfoldImg from "../images/leaders-immersion-program/Gibson Images7.png";
import missionMentorImg from "../images/leaders-immersion-program/Gibson Images6.png";
import receivingAndGivingImg from "../images/leaders-immersion-program/Gibson Images5.png";
import typewriterImg from "../images/leaders-immersion-program/Gibson Images4.png";
import appleWatchImg from "../images/leaders-immersion-program/Gibson Images3.png";
import isItPaidImg from "../images/leaders-immersion-program/Gibson Images2.png";
import shouldIDoTheProgramImg from "../images/leaders-immersion-program/Gibson Images.png";

const LeadersImmersionProgramPage: React.FC = () => {
  return (
    <main>
      <div className={styles.bannerContainer}>
        <NavLinks invertColor />
        <div>
          <center>
            <img src={cpLogo} alt="Culture Project Logo" width={300} />
          </center>
        </div>
        <div className={styles.bannerTitleContainer} style={rubikDirtFont}>
          <center>
            <h1>
              Leaders
              <br />
              Immersion
              <br />
              Program
            </h1>
          </center>
        </div>
      </div>

      <Row>
        <Col>
          <H1Red>What is The Culture Project?</H1Red>
        </Col>
        <Col>
          The Culture Project (CP) is a movement of young Australians who want
          to build a new culture: a culture where we have the skills, graces and
          friendships to become the people that we were made to be. A culture
          where people know who they are, why they matter, and have deep purpose
          in their day-to-day lives. A culture where couples and marriages
          aren’t fragile and confusing but getting stronger and more beautiful
          with time.
        </Col>
      </Row>

      <Row responsiveLayoutColReverse>
        <Col>
          <H1Red>How does the Leaders Immersion Program fit in?</H1Red>
          The Leaders Immersion Program (the LP for short) is at the heart of
          the Culture Project. It’s a 12 month program designed for 18-30 year
          olds who are studying or working casually/part-time. The LP is a
          deep-dive into how to become the person that you were made to be, how
          to build real friendships and relationships, and how to start building
          a better culture today. Those doing the LP are called Culture Project
          Leaders (CP Leaders).
        </Col>
        <Col>
          <center>
            <img src={howDoesTheLPYearFitInImg} width={300} />
          </center>
        </Col>
      </Row>

      <Row className={styles.whatWillIReceiveCPLeaderContainer}>
        <Col className={styles.whatWillIReceiveCPLeaderContainerCol}>
          <H1Red>What will I receive as a CP Leader?</H1Red>
          CP Leaders receive a lot - to bless CP Leaders is the first purpose of
          the Culture Project.
          <br />
          <br />
          In November/January you will receive over four weeks of live-in
          community time where you’ll develop new friendships, go deeper in
          prayer, learn about yourself, learn how to build something meaningful,
          and learn about how our minds and hearts work. In this time you’ll
          also be trained in support raising (fundraising).
          <br />
          <br />
          Then from February to November, you’ll receive weekly continued
          formation and community time, as well as regular support from a core
          leader. There will also be an Interior Integration Retreat during the
          year.
          <br />
          <br />
          All of this is completely free. The cost of providing this
          accommodation, studies, food, support and materials for each CP Leader
          is $30,000, however we believe that each human life is infinitely
          worth more than this, which is why we make this gift to each leader.
        </Col>
      </Row>

      <Row className={styles.whatWillIContributeCPLeaderContainer}>
        <Col className={styles.whatWillIContributeCPLeaderContainerCol}>
          <H1Red>What will I contribute as a CP Leader?</H1Red>
          CP Leaders will be asked to give back as well. This is the second
          purpose of the Culture Project: we want to bless people beyond those
          doing the LP because we want to spread as far as possible this message
          of our value, purpose, and the graces and skills necessary to live
          great things. This is the bigger picture of CP - to truly build this
          movement of young people.
          <br />
          <br />
          Therefore, CP Leaders will be supported in running the following
          outreach activities: personal support raising and communications, the
          Young Adult Series or School Outreach, and the Spring Conference.
          <br />
          <br />
          Through these activities, CP leaders will discover their gifts and
          gain valuable experience in areas like public speaking,
          communications, logistics and many others. CP Leaders receive a lot -
          to bless CP Leaders is the first purpose of the Culture Project.
        </Col>
      </Row>

      <Row flex={false}>
        <center>
          <img src={howDoesTheLPYearUnfoldImg} width={500} />
        </center>
      </Row>

      <Row>
        <div className={styles.lpYearEventsGrid}>
          <div>
            <div className={styles.lpYearEventsGridNumberLabel}>1</div>
            <H1Orange>Welcome and Training Week</H1Orange>
            We start the year with one week of introduction to the Culture
            Project mission, foundation in prayer, community time, and training
            in support raising
          </div>
          <div>
            <div className={styles.lpYearEventsGridNumberLabel}>2</div>
            <H1Orange>December Support Raising</H1Orange>
            Following Welcome and Training Week, CP Leaders undertake three to
            four weeks of support raising to raise financial support for their
            year in the program. See page 10 for details.
          </div>
          <div>
            <div className={styles.lpYearEventsGridNumberLabel}>3</div>
            <H1Orange>Summer Formation</H1Orange>
            This is four weeks of formation in identity and transformation
            authentic love and relationships, integrating your interior life,
            relational virtue, evangelisation, masculinity and femininity,
            purpose and selflessness. There are also times of spiritual growth
            through an introductory retreat, daily prayer, daily Mass, and
            serving one another in community life... and very importantly: we
            also have a lot of fun!
          </div>
          <div>
            <div className={styles.lpYearEventsGridNumberLabel}>4</div>
            <H1Orange>Community Days</H1Orange>
            Here we gather for one day per week of formation, community and
            mission preparation, in a central location. We also prepare to run
            our outreach missions.
          </div>
          <div>
            <div className={styles.lpYearEventsGridNumberLabel}>5</div>
            <H1Orange>Young Adult and School Outreach</H1Orange>
            Young adult outreach mainly happens through our Young Adult Series
            which are three series running for 5-6 weeks each, where young
            adults gather once a week on a weeknight or Saturday afternoon.
            School Outreach is done by a separate team who go into schools and
            speak with students about personal value, finding purpose and living
            genuine love.
          </div>
          <div>
            <div className={styles.lpYearEventsGridNumberLabel}>6</div>
            <H1Orange>Interior Integration Retreat</H1Orange>A multiple-day
            retreat based on the integration of the whole person. This retreat
            is run by Culture Project staff and is available to both
            participants in the LP and members of the public
          </div>
          <div>
            <div className={styles.lpYearEventsGridNumberLabel}>7</div>
            <H1Orange>Spring Conference</H1Orange>
            Running a 4-day conference for young people, focusing on theology of
            the body, relational virtue, identity and purpose.
          </div>
          <div>
            <div className={styles.lpYearEventsGridNumberLabel}>8</div>
            <H1Orange>Mission Mentor</H1Orange>A monthly meeting with a mission
            mentor, through the Catholic Psych Institute.
            <center>
              <img src={missionMentorImg} width={300} />
            </center>
          </div>
        </div>
      </Row>

      <Row flex={false}>
        <center>
          <img src={receivingAndGivingImg} width={500} />
        </center>
      </Row>

      <Row>
        <Col>
          <H1Red>Is the Leaders Immersion Program a job?</H1Red>

          <center>
            <img src={typewriterImg} width={500} />
          </center>
        </Col>
        <Col>
          No: it’s much more than a job.
          <br />
          <br />
          The LP is a journey that you live over the course of a year - along
          with a group of others - towards discovering your identity, your
          purpose, and how to live this greatness in your relationships and
          day-to-day life. It’s a year where we learn to receive the help we
          need, to choose who we want to become, and to put ourselves at the
          service of others.
          <center>
            <img src={appleWatchImg} width={300} />
          </center>
        </Col>
      </Row>

      <Row responsiveLayoutColReverse>
        <Col>
          <H1Red>Is it paid?</H1Red>
          Yes and no.
          <br />
          <br />
          The LP is not a job, so we don’t count our hours of involvement. In
          the LP, we both receive a lot for free (which is much more than we
          give), and we also learn to give generously without counting time.
          However, we know that people need money to live a normal life and so
          there is some remuneration.
        </Col>
        <Col>
          <center>
            <img src={isItPaidImg} alt="Wanderlust Series" width={500} />
          </center>
        </Col>
      </Row>

      <Row>
        <H1Red>Should I do the Leaders Immersion Program?</H1Red>
      </Row>
      <Row responsiveLayoutColReverse>
        <Col>
          Great question! It depends what you’re looking for in life.
          <br />
          <br />
          If you’re looking to make some money, or for not much to change in
          your life, or if you’re heavily focused on something else right now
          and don’t have head-space for other things, the LP is probably not for
          you (but you’re still extremely welcome at any other CP event!).
          <br />
          <br />
          However, if you want to live a year unlike any other, grow closer to
          God, challenge yourself, grow as a person, develop leadership skills,
          form deep friendships, be part of something bigger than yourself and
          become a blessing to others, then it may well be for you. Send us an
          email at info@thecultureproject.com.au or DM us on our social media
          channels, and let’s talk!
        </Col>
        <Col>
          <center>
            <img src={shouldIDoTheProgramImg} width={500} />
          </center>
        </Col>
      </Row>

      <WantToHearMoreSection />

      <PageFooter />
    </main>
  );
};

export default LeadersImmersionProgramPage;

export const Head = PageHead;
