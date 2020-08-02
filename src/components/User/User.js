import React from 'react';
import { Link, useParams } from "react-router-dom";

export default function User() {
  let { id } = useParams();

  return (
    <>
      <h2>Requested user ID: {id}</h2>
      <table>
        <th>Your waste in numbers</th>
        <tr>
          <td>Recycling</td>
          <td>[Number]</td>
        </tr>
        <tr>
          <td>Garbage</td>
          <td>[Number]</td>
        </tr>
        <tr>
          <td>Organic</td>
          <td>[Number]</td>
        </tr>
      </table>
      <Link to="/new">Add new</Link>
      <Link to="/forest">Leaderboard</Link>
    </>
  )
}