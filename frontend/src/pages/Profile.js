import React, { useState, useEffect } from "react";
import { Grid } from "@ui5/webcomponents-react";
import ProfileCardUser from "../components/Cards/Profile/ProfileCardUser";
import ProfileCardManager from "../components/Cards/Profile/ProfileCardManager";
import LearningCard from "../components/Cards/Profile/LearningCard";
import DonutChart from "../components/Charts/DonutChart";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import ExpCard from "../components/Cards/ExpCard.js";

const Profile = () => {
  const userId = localStorage.getItem("inumber");
  const [seriesData, setSeriesData] = useState([]);
  const [labelsData, setLabelsData] = useState([]);
  const [fetchData, setFetchData] = useState([]);
  const { user, team, manager } = useGetUserInfo(userId);

  const [learningData, setLearningData] = useState({
    courses: []
  });

  async function getLearningJourney() {
    const url = `${process.env.REACT_APP_BACKEND_URL}/user_journeys/user/${userId}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      setFetchData(data.userJourney);
      const courses = data.userJourney.map(
        (item) => item.learning_journey_title
      );

      setLearningData((prevData) => ({
        ...prevData,
        courses: courses,
      }));
    } catch (error) {
      console.error(error.message);
    }
  };

  async function getChartData() {
    const url = `${process.env.REACT_APP_BACKEND_URL}/user_journeys/user/${userId}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();

      // Extract roles and count occurrences
      const roleCounts = data.userJourney.reduce((acc, journey) => {
        (journey.roles || []).forEach(role => {
          acc[role] = (acc[role] || 0) + 1;
        });
        return acc;
      }, {});

      // Convert the map to arrays for seriesData and labelsData
      const labels = Object.keys(roleCounts);
      const series = Object.values(roleCounts);

      setLabelsData(labels);
      setSeriesData(series);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getLearningJourney();
    getChartData();
  }, [userId]);


  return (
    <Grid defaultSpan="XL12 L12 M12 S12" style={{ margin: "2rem" }}>
      <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            width: "45vw",
          }}
        >
          {/* New div wrapper for user and manager cards */}
          <div style={{ display: "flex", width: "100%" }}>
            <div style={{ marginRight: "2rem", width: "100%" }}>
              <ProfileCardUser data={user} style={{ flex: 1 }} />
            </div>
            <ProfileCardManager data={manager} style={{ flex: 1 }} />
          </div>
          <ExpCard data={fetchData} />
        </div>

        <div
          style={{
            width: "45vw",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <LearningCard data={learningData} />
          {seriesData.length > 0 && labelsData.length > 0 && (
            <DonutChart series={seriesData} labels={labelsData} width={300} height={300} />
          )}
        </div>
      </div>
    </Grid>
  );
};

export default Profile;