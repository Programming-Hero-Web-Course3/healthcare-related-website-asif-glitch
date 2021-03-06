import React from 'react';
import Banner from '../../Banner/Banner';
import Doctors from '../../Doctors/Doctors';
import Services from '../Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;