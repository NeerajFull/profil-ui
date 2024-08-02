import React from "react";

const RecentOrders = () => {
  const orders = [
    { customer: "Wade Warren", orderNo: "15478256", amount: "$124.00", status: "Delivered" },
    { customer: "Jane Cooper", orderNo: "48965786", amount: "$305.02", status: "Delivered" },
    { customer: "Guy Hawkins", orderNo: "78958215", amount: "$45.88", status: "Cancelled" },
    { customer: "Kristin Watson", orderNo: "20965732", amount: "$65.00", status: "Pending" },
    { customer: "Cody Fisher", orderNo: "95715620", amount: "$545.00", status: "Delivered" },
    { customer: "Savannah Nguyen", orderNo: "78514568", amount: "$128.20", status: "Delivered" },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-lg mb-4">Recent Orders</h2>
      <div>
        {orders.map((order, index) => (
          <div key={index} className="flex justify-between items-center mb-4">
            <div>
              <p>{order.customer}</p>
              <p className="text-sm text-gray-400">{order.orderNo}</p>
            </div>
            <div>
              <p>{order.amount}</p>
              <p className={`text-sm ${order.status === "Cancelled" ? "text-red-500" : "text-green-500"}`}>
                {order.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrders;
