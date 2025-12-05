import Sidebar from "../components/Sidebar";
import BalanceCard from "../components/BalanceCard";
import SpendingChart from "../components/SpendingChart";
import CategoryChart from "../components/CategoryChart";
import TransactionsTable from "../components/TransactionsTable";

const Dashboard = () => {
  return (
    <div className="flex bg-[#1a1c23] min-h-screen">
      <Sidebar />

      <div className="p-6 flex-1">
        <h1 className="text-white text-2xl mb-6">Dashboard</h1>

        <div className="grid grid-cols-3 gap-6">
          <BalanceCard />
          <SpendingChart />
          <CategoryChart />
        </div>

        <div className="mt-6">
          <TransactionsTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
