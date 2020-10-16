import React from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";

const state = {
  datasets: [
    {
      data: [],
      backgroundColor: [
        "#ffcd56",
        "#ff6384",
        "#36a2eb",
        "#fd6b19",
        "#2a5296",
        "#6e3aa6",
        "#e31b1b",
        "#2ec747",
      ],
    },
  ],
  labels: [],
};

export default class Chart extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:5000/budget").then((res) => {
      for (var i = 0; i < res.data.length; i++) {
        state.datasets[0].data[i] = res.data[i].budget;
        state.labels[i] = res.data[i].title;
      }
      this.setState({state});
    });
  }

  render() {
    return (
      <div>
        <Pie
          data={state}
          options={{
            legend: {
              display: true,
              position: "left",
            },
          }}
        />
      </div>
    );
  }
}
