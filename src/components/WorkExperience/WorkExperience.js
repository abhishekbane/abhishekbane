import React from "react";

import Section from "../UI/Section/Section";
import DescriptionList from "../UI/DescriptionList/DescriptionList";
import { PROFESSIONAL_EXPERIENCE } from "../../containers/AskQuestions/QuestionsData";

import styles from "./WorkExperience.module.css";

const workExperience = () => {
  return (
    <Section anchorId={PROFESSIONAL_EXPERIENCE} heading="Work Experience">
      <div className={styles.workExperience}>
        <DescriptionList
          title="Delhivery (2021 - Present)"
          list={[
            "Designed and architected a UI Library called Aquarius Prime. Two libraries were built, one using Vue and the other using React Native. The Ul libraries are used by around 4 to 5 products within Delhivery which process millions of orders on a monthly basis for a consistent Ul experience which reduces their development efforts and time to market.",
            "Founding member of Delhivery One Web App which is being used by around 30,000 customers which includes SMEs and D2C brands, where we formulated development frameworks and libraries to reduce development effort for new features.",
            "Created a framework for writing mobile friendly code for the Delhivery One Web app.",
            "Led development of Delhivery One Mobile App in React Native.",
            "Wrote CI/CD pipeline using Github Actions for mobile app building and deployment to app stores’ developer consoles.",
            "Additional responsibilities included handling interviews for frontend developers and reviewing pull requests of entry/mid/senior level developers.",
            "Wrote and owned API endpoints for multiple features like putting orders on hold, customer experience services like ticket management systems and exception management systems in Java Spring Boot.",
          ]}
        />
      </div>
      <div className={styles.workExperience}>
        <DescriptionList
          title="Accenture (2018 - 2021)"
          list={[
            "Worked with UX designers to implement chatbot and landing pages for our client.",
            "Created and deployed a form framework that helped admins and business users to create forms easily for a variety of business needs.",
            "Developed interfaces for the automation of site creation and deletion process.",
            "Created a large scale file management system along with an easy to use interface for business users.",
          ]}
        />
      </div>
    </Section>
  );
};

export default workExperience;
