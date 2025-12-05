const TopBar = () => {
	return (
		<div className="w-full bg-[#141518] text-gray-300 p-4 flex items-center justify-between">
			<div className="text-lg font-semibold">MoneyWise</div>
			<div className="flex items-center gap-4">
				<input
					className="bg-[#1c1f26] rounded-md px-3 py-1 text-sm text-gray-300"
					placeholder="Search"
				/>
				<div className="text-sm text-gray-400">John Doe</div>
			</div>
		</div>
	);
};

export default TopBar;
