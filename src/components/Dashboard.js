import React from "react";
import PieChart from "./PieChart";

export default function Dashboard() {
  const internDetails = ["Username, password"];
  return (
    <div>
      <div class="d-flex justify-content-around">
        <button class="btn btn-light">UserName</button>
        <button class="btn btn-light">Details</button>
        <button class="btn btn-light">Rewards</button>
        <button class="btn btn-light">Reminders</button>
      </div>
      <div class="d-flex justify-content-center text-light">
        <PieChart />
      </div>
    </div>
  );
}
