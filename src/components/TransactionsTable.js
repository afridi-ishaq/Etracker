const TransactionsTable = () => {
  const transactions = [
    { date: "2025-01-10", desc: "Grocery", amount: -128.3 },
    { date: "2025-01-12", desc: "Salary", amount: 1200 },
  ];

  return (
    <div className="bg-[#242830] p-6 rounded-xl shadow-sm">
      <h3 className="text-gray-400 mb-4">Recent Transactions</h3>

      <table className="w-full text-gray-300 text-sm">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="py-2">Date</th>
            <th>Description</th>
            <th className="text-right">Amount</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t, i) => (
            <tr key={i} className="border-b border-gray-700">
              <td className="py-2">{t.date}</td>
              <td>{t.desc}</td>
              <td className={`text-right ${t.amount < 0 ? "text-red-400" : "text-green-400"}`}>
                {t.amount < 0 ? "-" : "+"}${Math.abs(t.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
