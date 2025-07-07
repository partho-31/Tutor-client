import EChartsReact from 'echarts-for-react';
import useTuitionContext from '../../../hooks/useTuitionContext';

const LineChart = () => {
const {payments} = useTuitionContext()

const getLast6Months = () => {
  const now = new Date();
  const months = [];

  for (let i = 5; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    months.push({ label: month, key: `${year}-${date.getMonth()}` });
  }

  return months;
};


const getMonthlyEnrollmentStats = (transactions) => {
  const recentMonths = getLast6Months();
  const counts = {};

  recentMonths.forEach(({ label }) => {
    counts[label] = 0;
  });

  transactions.forEach((item) => {
    const date = new Date(item.created_at);
    const year = date.getFullYear();
    const key = `${year}-${date.getMonth()}`;

    const monthMatch = recentMonths.find((m) => m.key === key);
    if (monthMatch) {
      counts[monthMatch.label]++;
    }
  });

  return counts;
};

const history = getMonthlyEnrollmentStats(payments)

const Month = Object.keys(history)
const Enrolled = Object.values(history)

const option = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: Month
  },
  axisLabel: {
      interval: 0,
      rotate : 0,
      formatter: function (value) {
        return value.length > 3 ? value.slice(0, 3) : value;
      },
    },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: Enrolled,
      type: 'line',
      areaStyle: {}
    }
  ]
};
    return (
        <div>
            <EChartsReact option={option} style={{height: "339px", width: "100%"}}/>
        </div>
    );
};

export default LineChart;