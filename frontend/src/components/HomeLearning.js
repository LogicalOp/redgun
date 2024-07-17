import React from "react";
import LearningCard from './/Cards/Profile/LearningCard';
import {Card} from "@ui5/webcomponents-react";
import DonutChart from './/Charts/DonutChart';

const HomeLearning = ({data}) => {



    return(
        <Card>
            <LearningCard data = { data } />
            <DonutChart/>
        </Card>
    )
};

export default HomeLearning;