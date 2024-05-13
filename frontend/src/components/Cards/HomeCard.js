import { Card, CardHeader, Button, Icon } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

const HomeCard = ({ data }) => {
    return (
        <Card
            header={
                <CardHeader 
                    avatar={<Icon name="person-placeholder" />}
                    titleText={data.name}
                    subtitleText={data.team}
                />
            }
            style={{
                width: "22.5vw",
                height: "17.5vh",
                paddingTop: '10px',
            }}
        >
            <h3>{data.content}</h3>
            <div style={{ textAlign: 'right', paddingRight: '1vw', paddingBottom: '5vh' }}>
                <Button design="Positive" size="Small" style={{ marginRight: '2vw' }} icon="thumb-up">Like</Button>
                <Button design="Emphasized" size="Small" icon="share">Share</Button>
            </div>
        </Card>
    );
}

export default HomeCard;