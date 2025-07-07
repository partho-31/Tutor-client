import EChartsReact from "echarts-for-react";
import useTuitionContext from "../../../hooks/useTuitionContext";

const BarChart = () => {
  const { tuitions } = useTuitionContext();

  const subjectCounts = {};

  tuitions?.results.forEach((course) => {
    const subject = course?.subjects?.toLowerCase();

    if (subjectCounts[subject]) {
      subjectCounts[subject] += 1;
    } else {
      subjectCounts[subject] = 1;
    }
  });

  const subject = Object.keys(subjectCounts)
  const value = Object.values(subjectCounts)

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
  {
    type: "category",
    data: subject,
    axisTick: {
      alignWithLabel: true,
    },
    axisLabel: {
      interval: 0,
      rotate : 0,
      formatter: function (value) {
        return value.length > 4 ? value.slice(0, 4) + "…" : value;
      },
    },
  },
],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Direct",
        type: "bar",
        barWidth: "60%",
        data: value,
      },
    ],
  };
  return <EChartsReact option={option} style={{ height: "300px", width: "100%" }} />;
};

export default BarChart;
