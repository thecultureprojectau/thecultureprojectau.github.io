import React from "react";
import {
  PageFooter,
  PageHead,
  rubikDirtFont,
  WantToHearMoreSection,
} from "../components/common";
import { NavLinks } from "../components/nav";
import * as styles from "./leaders-immersion-program.module.css";

import cpLogo from "../images/CP_Logo_modified.png";

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

      <WantToHearMoreSection />

      <PageFooter />
    </main>
  );
};

export default LeadersImmersionProgramPage;

export const Head = PageHead;
