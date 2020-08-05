import React, { useState } from "react";

export default function useApplicationData() {
  const [state, setState] = useState({
    user: {},
    userBins: []
  });

  function convertToArray(data) {
    const result = [];
    for (let item of Object.values(data)) {
      result.push(item);
    }
    return result;
  };

  function convertToObject(data) {
    const result = {};
    let total = 0;
    for (let item of data) {
      result[item.name] = Number(item.sum);
      total += Number(item.sum);
    }
    result.total = total;
    return result;
  }

  function updateScore() {
    const updatedScore = state.user.total + 25;

    const user = {
      ...state.user,
      total: updatedScore
    }

    setState({
      ...state,
      user
    })
  };

  return {
    state,
    setState,
    convertToArray,
    convertToObject,
    updateScore
  };
};