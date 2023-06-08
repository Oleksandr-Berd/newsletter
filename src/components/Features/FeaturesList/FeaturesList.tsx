import React from 'react';


import FeaturesItem from '../FeaturesItem/FeaturesItem';

interface IItem{
    id: number;
    text: string;
}

interface IProps{
    features: IItem[];
}

const FeaturesList: React.FC<IProps> = ({ features }) => {
    return (<ul>
        {features.map(({ id, text }) => (<FeaturesItem key={id} text={text} />))}
    </ul>);
}

export default FeaturesList