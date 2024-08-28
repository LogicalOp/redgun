import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  Button,
  Badge,
  Icon,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "../App.css";

const LearningJourneyDetail = () => {
  const { id: id } = useParams();
  const [journey, setJourney] = useState(null);
  const navigate = useNavigate();

  const roles = [
    { name: "Administrator", color: "1", icon: "employee" },
    { name: "Architect", color: "2", icon: "employee" },
    { name: "Business User", color: "3", icon: "employee" },
    { name: "CEE", color: "4", icon: "employee" },
    { name: "Consultant", color: "5", icon: "employee" },
    { name: "Data Analyst", color: "6", icon: "employee" },
    { name: "Developer", color: "7", icon: "employee" },
    { name: "IT Lead", color: "7", icon: "employee" },
    { name: "Marketing", color: "8", icon: "employee" },
    { name: "Presales", color: "9", icon: "employee" },
    { name: "Project Manager", color: "10", icon: "employee" },
    { name: "Sales", color: "1", icon: "employee" },
    { name: "Support Consultant", color: "2", icon: "employee" },
  ];

  useEffect(() => {
    const fetchJourneys = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/learning_journeys/${id}`
      );
      const data = await response.json();
      setJourney(data.learningJourney[0]);
    };

    fetchJourneys();
  }, []);

  if (!journey) {
    return <p>Loading...</p>;
  }

  const journeyRoles = roles.filter((role) =>
    journey.roles.includes(role.name)
  );

  return (
    <div className="learning-journey-page">
      <Button
        design="Emphasized"
        icon="nav-back"
        onClick={() => navigate("/learning")}
        className="back-button"
      >
        Back
      </Button>
      <h1 className="title">{journey.title}</h1>

      <div className="journey-content">
        <div className="left-section">
          <div className="journey-info">
            <Card
              className="info-card"
              style={{
                height: "4rem",
              }}
            >
              <div
                className="journey-stats"
                style={{ fontSize: "1.2rem", marginTop: "1.2rem" }}
              >
                <Icon name="course-book" /> {journey.units} units &nbsp; |
                &nbsp;
                <Icon name="currency" /> {journey.cost} &nbsp; | &nbsp;
                <Icon name="fob-watch" /> {journey.duration / 60} hours
              </div>
            </Card>
          </div>

          <div className="media-section">
            {journey.videourl ? (
              <video width="66vw" height="86vh" controls>
                <source src={journey.videourl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : journey.imageurl ? (
              <img
                src={journey.imageurl}
                alt="Learning Journey"
                width="818.33"
                height="638.07"
                className="journey-image" // Add this class
              />
            ) : (
              <p>No media available</p>
            )}
          </div>
        </div>

        <div className="right-section">
          <Card className="info-card">
            <CardHeader titleText="Overview" />
            <div style={{ padding: "1rem" }}>
              <p>{journey.overview}</p>
            </div>
          </Card>

          <Card className="info-card">
            <CardHeader titleText="Objectives" />
            <div style={{ padding: "1rem" }}>
              <p>{journey.objectives}</p>
            </div>
          </Card>
          <Card className="info-card">
            <CardHeader titleText="Roles" />
            <div className="roles-section">
              {journeyRoles.map((role, index) => (
                <Badge
                  key={index}
                  icon={<Icon name={role.icon} />}
                  onClick={() => console.log(`${role.name} clicked`)}
                  colorScheme={role.color}
                  className="role-badge"
                >
                  {role.name}
                </Badge>
              ))}
            </div>
          </Card>
          <Card className="info-card">
            <CardHeader titleText="Pre-requisites" />
            <p>{journey.prerequisites}</p>
          </Card>
          <Button design="Default" className="start-button">
            Start Learning
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LearningJourneyDetail;
