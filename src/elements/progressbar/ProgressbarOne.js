import React from 'react';
import TrackVisibility from "react-on-screen";
import Skill from "./Skill";

const progressData = [
    {
      id: 1,
      title: "AngularJS, Angular 2+",
      percantage: 100,
      progressColor: "#009bf7",
    },
    {
      id: 2,
      title: "React",
      percantage: 80,
      progressColor: "#ff3451",
    },
    {
      id: 3,
      title: "VueJS",
      percantage: 60,
      progressColor: "#6549D5",
    },
    {
      id: 4,
      title: "Svelte",
      percantage: 60,
      progressColor: "#b400c1",
    },
];

const ProgressbarOne = () => {
    return (
        <>
            {progressData.map((progress) => (
            <TrackVisibility
                once
                key={progress.id}
                className="single-progress"
            >
                <Skill progress={progress} /> 
            </TrackVisibility>
            ))} 
        </>
    )
}


export default ProgressbarOne;
