import React, { useState } from 'react';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import Slider from '../components/Slider';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <div>
      <Slider />
      <SearchExercises />
      <Exercises />
    </div>
  );
};

export default Home;