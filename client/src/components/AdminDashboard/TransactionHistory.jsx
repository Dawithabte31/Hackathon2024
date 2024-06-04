import React from "react";

//This component helps the admin to track the transaction history of the users (the buyers and the sellers )

function TransactionHistory() {
  return (
    <div>
      <div class="relative overflow-x-auto">
        <h2 className="my-4 text-center text-3xl">Recent transaction </h2>
        <table class="w-full text-left text-sm text-gray-500 rtl:text-right">
          <thead class="text-xs uppercase text-gray-900">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                TIN Number
              </th>
              <th scope="col" class="px-6 py-3">
                UserName(buyer)
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white">
              <th
                scope="row"
                class="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">00235412</td>
              <td class="px-6 py-4">caleb5050</td>
              <td class="px-6 py-4">2999</td>
              <td class="px-6 py-4">12/02/2015</td>
            </tr>
            <tr class="bg-white">
              <th
                scope="row"
                class="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
              >
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">00235499</td>
              <td class="px-6 py-4">abyssinia92</td>
              <td class="px-6 py-4">1999</td>
              <td class="px-6 py-4">2/02/2015</td>
            </tr>
            <tr class="bg-white">
              <th
                scope="row"
                class="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
              >
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">00235438</td>
              <td class="px-6 py-4">tekishahmed12</td>
              <td class="px-6 py-4">99</td>
              <td class="px-6 py-4">12/12/2015</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionHistory;
