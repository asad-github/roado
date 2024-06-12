import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement);

const DoughnutChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "# of Votes",
        data: [120, 80, 200],
        backgroundColor: [
          "rgba(255, 203, 73, 1)", //yellow
          "rgba(116, 100, 255, 1)",
          "rgba(79, 210, 181, 1)", //cian
        ],
      },
    ],
  };
  const plugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 160).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "top";
        ctx.fillStyle = "gray";
        var text1 = "Total",
          textX = Math.round((width - ctx.measureText(text1).width) / 2),
          textY = height / 3;
        ctx.fillText(text1, textX, textY);
        ctx.fillStyle = "black";
        var text2 = "123456",
          textX = Math.round((width - ctx.measureText(text1).width) / 2.3),
          textY = height / 2;
        ctx.fillText(text2, textX, textY);
        ctx.save();
      },
    },
  ];
  const options = {
    cutout: "70%",
    // radius: "80%",
  };

  return (
    <div className=" mb-3 h-1/2">
      <Doughnut
        style={{ margin: "auto" }}
        data={data}
        plugins={plugins}
        options={options}
      />
    </div>
  );
};

export default DoughnutChart;
