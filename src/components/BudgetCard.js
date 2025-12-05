const BudgetCard = () => {
	return (
		<div className="bg-[#242830] p-6 rounded-xl shadow-sm">
			<h3 className="text-gray-400">Monthly Budget</h3>
			<p className="text-2xl text-white">$1,200</p>
			<p className="text-sm text-red-400">$350 remaining</p>
		</div>
	);
};

export default BudgetCard;
