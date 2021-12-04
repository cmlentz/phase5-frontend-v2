import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components/macro';
import {BASE_URL} from '../constraints/index.js';

const ReverseStyledHeader = styled.h2`
  font-size: 2rem;
  background-image: linear-gradient(to left, rgba(100,54,143,0), rgba(100,54,143,1));
  text-align: center;
`

const ActivityButton = styled.button`
  font-size: 1rem;
  border: 1px solid;
  border-radius: 2px;
  background-color: yellow;
  text-align: center;
  margin-right: 10px;
  margin-bottom: 5px;
  &:hover {background-color: red; cursor: pointer};
`

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "/activities")
      .then((r) => r.json())
      .then(setActivities);
  }, []);

  function handleDeleteActivity(id) {
    fetch(BASE_URL + `/activities/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setActivities((activities) =>
          activities.filter((activity) => activity.id !== id)
        );
      }
    });
  }

  return (
    <div style={{
      background: "lightblue",
    }}>
      <ReverseStyledHeader>Things To Do</ReverseStyledHeader>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <ActivityButton onClick={() => handleDeleteActivity(activity.id)}>
              Delete
            </ActivityButton>
            <span>{activity.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;