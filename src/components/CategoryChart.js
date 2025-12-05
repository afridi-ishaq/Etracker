import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Groceries", value: 60 },
  { name: "Rent", value: 20 },
  { name: "Transport", value: 10 },
  { name: "Shopping", value: 10 },
];

const colors = ["#00e676", "#2979ff", "#ff1744", "#ffa000"];

const CategoryChart = () => {
  return (
    <div className="bg-[#242830] p-6 rounded-xl shadow-sm">
      <h3 className="text-gray-400 mb-4">Expense Categories</h3>

      <div style={{ width: "100%", height: 220 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell key={index} fill={colors[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CategoryChart;
