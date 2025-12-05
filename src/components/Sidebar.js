const Sidebar = () => {
  return (
    <div className="w-64 bg-[#1c1f26] text-gray-300 h-screen p-6">
      <h2 className="text-xl font-bold mb-8">MoneyWise</h2>
      <ul className="space-y-4">
        <li className="hover:text-white cursor-pointer">Dashboard</li>
        <li className="hover:text-white cursor-pointer">Transactions</li>
        <li className="hover:text-white cursor-pointer">Reports</li>
        <li className="hover:text-white cursor-pointer">Budget</li>
        <li className="hover:text-white cursor-pointer">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
