import React from 'react'

async function getAllLaunches() {
 try {
  const API_URL = "https://api.spacexdata.com/v5";
  const response = await fetch(`${API_URL}/launches`);
  const data = await response.json();
  return data;
 } catch (error) {
  console.log(error);
 }

}


export { getAllLaunches };