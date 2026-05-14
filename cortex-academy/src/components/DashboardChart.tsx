import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    progress: 20,
  },
  {
    name: "Tue",
    progress: 35,
  },
  {
    name: "Wed",
    progress: 45,
  },
  {
    name: "Thu",
    progress: 60,
  },
  {
    name: "Fri",
    progress: 80,
  },
];

const DashboardChart = () => {

  return (

    <div className="bg-zinc-900 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Learning Progress 📈
      </h2>

      <div className="h-[300px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart
            data={data}
          >

            <XAxis
              dataKey="name"
            />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="progress"
              stroke="#2563eb"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

};

export default DashboardChart;