import FeaturesList from "./FeaturesList/FeaturesList";
import * as SC from "./FeaturesStyled"

import features from 'dataBase/features.json'


const Features: React.FC = () => {
    return (<SC.Container>
        <SC.Title>Stay updated!</SC.Title>
        <SC.Text>Join 60,000+ product managers receiving monthly updates on:</SC.Text>
        <FeaturesList features={features} />
    </SC.Container>);
}

export default Features;