import React from "react";

import Section from "../UI/Section/Section";
import DescriptionList from "../UI/DescriptionList/DescriptionList";

import { SKILLS } from "../../containers/AskQuestions/QuestionsData";

import styles from "./Skills.module.css";

const skills = (props) => {
  return (
    <Section anchorId={SKILLS} heading="Skills">
      <div className={styles.skills}>
        <DescriptionList
          title="Languages and Technologies"
          list={[
            "Javascript",
            "Typescript",
            "React.JS",
            "React Native",
            "Vue.js",
            "Node.js",
            "Redux",
            "Tailwind",
            "HTML",
            "CSS",
            "SCSS",
          ]}
        />
      </div>
    </Section>
  );
};

export default skills;
