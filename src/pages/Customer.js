import { useEffect, useState } from "react";
import { useParams } from "react-router";
import NewRegister from "./NewRegister";
import {BASE_URL} from '../constraints/index.js';
import ContactCard from '../components/ContactCard';
import styled from 'styled-components/macro';

const LeftDiv = styled.div`
float: left;
width: 50%;
padding: 10px;
text-align: center;
`
const RightDiv = styled.div`
float: left;
width: 50%;
text-align: center;
`

const DeleteButton = styled.button`
  font-size: 1rem;
  border: 1px solid;
  border-radius: 2px;
  background-color: yellow;
  text-align: center;
  margin-right: 10px;
  margin-bottom: 5px;
  &:hover {background-color: red; cursor: pointer};
`

function Customer() {
  const [{ data: customer, error, status }, setCustomer] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(BASE_URL + `/customers/${id}`)
      .then((r) => {
        if (r.ok) {
          r.json().then((customer) =>
            setCustomer({ data: customer, error: null, status: "resolved" })
          );
        } else {
          r.json().then((err) =>
            setCustomer({ data: null, error: err.error, status: "rejected" })
          );
        }
      });
  }, [id]);

  function handleAddActivity(newActivity) {
    setCustomer({
      error,
      status,
      data: {
        ...customer,
        activities: [...customer.activities, newActivity],
      },
    });
  }

  if (status === "pending") return <h2>Loading...</h2>;
  if (status === "rejected") return <h2>Error: {error}</h2>;

  return (
    <div style={{ paddingTop: "20px" }}>
      <center>
        <ContactCard
          avatarSrc="https://img.icons8.com/emoji/48/000000/grinning-face-with-big-eyes--v2.png"
          name={customer.name}
          location={ `${customer.city}, ${customer.state}` }
          email={`${customer.email}`}
        />
      </center>
      <br/>
      <div className="outer">
      <LeftDiv>
        <ul>
          <li><h2>{customer.name}'s Favorite Activities:</h2></li>
            {customer.activities.map((activity) => (
              <li key={activity.id}>
                <DeleteButton>
                  Delete
                </DeleteButton>
                <span>{activity.name}</span>
              </li>
            ))}
        </ul>
      </LeftDiv>
      <RightDiv>
        <NewRegister onAddActivity={handleAddActivity} customerId={customer.id} />
      </RightDiv>
      </div>
    </div>
  );
}

export default Customer;