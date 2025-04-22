import { useEffect, useState } from "react";
import { AgCharts } from "ag-charts-react";

const Chart = () => {
  const [options, setOptions] = useState({
    height: 500,
    title: { text: "Space Mission Data" },
    subtitle: { text: "Price per Mission" },
    data: [], // initially empty
    series: [
      {
        type: "bar",
        xKey: "mission",
        yKey: "price",
        yName: "Price (USD)",
      },
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
        title: { text: "Mission" },
        label: {
          enabled: false, // disables X-axis labels
        },
      },
      {
        type: "number",
        position: "left",
        title: { text: "Price (USD)" },
        label: {
          formatter: (params) => `$${Number(params.value).toLocaleString()}`,
        },
      },
    ],
  });

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/space-mission-data.json")
      .then((res) => res.json())
      .then((data) => {
        setOptions((prev) => ({
          ...prev,
          data,
        }));
      });
  }, []);

  return (
    <div>
      <AgCharts options={options} />
    </div>
  );
};

export default Chart;
