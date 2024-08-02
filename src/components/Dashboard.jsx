import React from "react";
import ActivityChart from "./ActivityChart";
import RecentOrders from "./RecentOrders";
import CustomerFeedback from "./CustomerFeedback";
import CircularProgressBar from "./CircularProgressBar";

const Dashboard = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-lg">Total Orders</h2>
                    <p className="text-3xl">75</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-lg">Total Delivered</h2>
                    <p className="text-3xl">70</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-lg">Total Cancelled</h2>
                    <p className="text-3xl">5</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-800 p-5 rounded-lg flex justify-between">
                    <div>
                        <h2 className="text-lg">Net Profit</h2>
                        <p className="text-3xl">$6759.25</p>
                    </div>
                    <div>
                        <h2 className="text-lg">Order Completion Rate</h2>
                        <CircularProgressBar percentage={70} />
                    </div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">

                </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg mb-8">
                <ActivityChart />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <RecentOrders />
                <CustomerFeedback />
            </div>
        </div>
    );
};

export default Dashboard;
