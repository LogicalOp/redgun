import React from "react";
import { Card, CardHeader, ProgressIndicator } from "@ui5/webcomponents-react";

const ExpCard = ({ data }) => {
  // Ensure data is an array
  if (!Array.isArray(data)) {
    console.error("Data should be an array");
    return null;
  }

  // Define experience multipliers
  const experienceMultipliers = {
    Beginner: 1,
    Intermediate: 2,
    Expert: 3,
  };

  // Define experience levels
  const experienceLevels = [
    { level: 1, threshold: 100 },
    { level: 2, threshold: 400 },
    { level: 3, threshold: 900 },
    { level: 4, threshold: 1600 },
    { level: 5, threshold: 2500 },
  ];

  // Filter completed courses and calculate total experience
  const totalExperience = data
    .filter((item) => item.iscompleted)
    .reduce((acc, item) => {
      const durationInHours = parseInt(item.duration, 10) / 60;
      const experienceMultiplier = experienceMultipliers[item.experience] || 0;
      return (
        acc +
        (isNaN(durationInHours) ? 0 : durationInHours * experienceMultiplier)
      );
    }, 0);
  console.log(totalExperience);

  // Determine current level and next level threshold
  let currentLevel = 0;
  let nextLevelThreshold = 0;
  for (let i = 0; i < experienceLevels.length; i++) {
    if (totalExperience >= experienceLevels[i].threshold) {
      currentLevel = experienceLevels[i].level;
      nextLevelThreshold = experienceLevels[i + 1]
        ? experienceLevels[i + 1].threshold
        : experienceLevels[i].threshold;
    }
  }

  // Calculate progress towards the next level
  let progressToNextLevel = totalExperience;
  if (currentLevel > 0 && currentLevel < experienceLevels.length) {
    progressToNextLevel =
      ((totalExperience - experienceLevels[currentLevel - 1].threshold) /
        (nextLevelThreshold - experienceLevels[currentLevel - 1].threshold)) *
      100;
  } else if (currentLevel === experienceLevels.length) {
    progressToNextLevel = 100; // Max level reached
  }

  return (
    <Card
      header={
        <CardHeader
          level="H4"
          titleText="Experience Summary"
          style={{ margin: "2rem" }}
        />
      }
    >
      <p style={{ textAlign: "left", marginLeft: "1rem" }}>
        Total Experience Score: {totalExperience}
      </p>
      <p style={{ textAlign: "left", marginLeft: "1rem" }}>
        Current Level: {currentLevel}
      </p>
      <div style={{ margin: "1rem" }}>
        <ProgressIndicator
          value={progressToNextLevel}
          displayValue={`${progressToNextLevel.toFixed(2)}%`}
        />
      </div>
    </Card>
  );
};

export default ExpCard;
