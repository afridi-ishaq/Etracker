const BalanceCard = () => {
  return (
    <div className="bg-[#242830] p-6 rounded-xl shadow-sm">
      <h3 className="text-gray-400">Total Balance</h3>
      <p className="text-3xl text-white">$4,830.50</p>
      <p className="text-sm text-green-400">+ 8% this month</p>
    </div>
  );
};

export default BalanceCard;
