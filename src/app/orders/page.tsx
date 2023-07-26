import React from "react";

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 ">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base odd:bg-red-100">
            <td className="hidden md:block py-6">1233789546</td>
            <td className="py-6">19.07.2023</td>
            <td className="py-6">$50.00</td>
            <td className="hidden md:block py-6">
              BigMac (2), French Fries Large (3)
            </td>
            <td className="py-6">On the way</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-blue-100">
            <td className="hidden md:block py-6">1233789546</td>
            <td className="py-6">19.07.2023</td>
            <td className="py-6">$50.00</td>
            <td className="hidden md:block py-6">
              BigMac (2), French Fries Large (3)
            </td>
            <td className="py-6">Delivered</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-blue-100">
            <td className="hidden md:block py-6">1233789546</td>
            <td className="py-6">19.07.2023</td>
            <td className="py-6">$50.00</td>
            <td className="hidden md:block py-6">
              BigMac (2), French Fries Large (3)
            </td>
            <td className="py-6">Delivered</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
