import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components/macro';
import {BASE_URL} from '../constraints/index.js';

const StyledHeader = styled.h2`
  font-size: 2rem;
  background-image: linear-gradient(to left, rgba(100,54,143,0), rgba(100,54,143,1));
  text-align: center;
`

const StyledLink = styled(Link)`
  font: bold 20px Arial;
  text-decoration: none;
  color: rgba(100,54,143,1);
  padding: 3px 8px 3px 8px;
  border-radius: 7px;
  &:hover {background: rgba(100,54,143,1); color: lightblue; cursor: pointer};
`;

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "/customers")
      .then((r) => r.json())
      .then(setCustomers);
  }, []);

  return (
    <div style={{
      background: "lightblue"
    }}>
      <StyledHeader>Explorers</StyledHeader>
      <h2 style={{ textAlign: "center" }}><u>Meet some of your fellow explorers:</u></h2>
      <ul style={{ columns: 3 }}>
        {customers.map((customer) => (
          <li style={{ marginBottom: '5px' }} key={customer.id}>
            <StyledLink to={`/customers/${customer.id}`}>{customer.name}</StyledLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList;