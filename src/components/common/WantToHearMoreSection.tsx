import React from "react";
import { Row, H1Red, WhiteText } from "./CommonComponents";
import * as styles from "./wantToHearMoreSection.module.css";

export const WantToHearMoreSection: React.FC = () => {
  return (
    <div className={styles.wantToHearMoreSection}>
      <Row flex={false}>
        <H1Red>
          <WhiteText>Want to hear more?</WhiteText>
        </H1Red>
        <div className={styles.wantToHearMoreSection_Text1}>
          <WhiteText>
            Suscribe to our emails for resources and articles from the Culture
            Project. Keep up to date with future events and acitvities.
          </WhiteText>
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            className={styles.wantToHearMoreSection_Input}
          />
          <input
            type="text"
            placeholder="First Name"
            className={styles.wantToHearMoreSection_Input}
          />
          <input
            type="text"
            placeholder="Last Name"
            className={styles.wantToHearMoreSection_Input}
          />
        </div>
        <div>
          <button className={styles.wantToHearMoreSection_SubscribeButton}>
            <h2>SUBSCRIBE</h2>
          </button>
        </div>
      </Row>
    </div>
  );
};
