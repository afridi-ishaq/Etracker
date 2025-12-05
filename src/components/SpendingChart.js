import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", amount: 300 },
  { month: "Feb", amount: 450 },
  { month: "Mar", amount: 600 },
  { month: "Apr", amount: 400 },
  { month: "May", amount: 700 },
];

const SpendingChart = () => {
  return (
    <div className="bg-[#242830] p-6 rounded-xl shadow-sm">
      <h3 className="text-gray-400 mb-4">Monthly Spending Analysis</h3>

      <div style={{ width: "100%", height: 220 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis dataKey="month" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#00e676" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SpendingChart;
