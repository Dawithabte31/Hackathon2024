import React from "react";

// This component showcases the transaction that are conducted by the seller
function Transaction() {
  return (
    <div className="mx-auto">
      <div class="relative mx-auto overflow-x-auto">
        <h2 className="mb-4 text-center text-2xl">
          Here are your recent transactions
        </h2>
        <table class="w-full text-left text-sm text-gray-500 rtl:text-right">
          <thead class="border-b-2 text-lg uppercase text-gray-700">
            <tr>
              <th scope="col" class="bg-gray-50 px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Product Amount
              </th>
              <th scope="col" class="bg-gray-50 px-6 py-3">
                Product Price(ETB)
              </th>
              <th scope="col" class="px-6 py-3">
                Transaction Date
              </th>
            </tr>
          </thead>
          <tbody className="text-lg">
            <tr class="border-b border-gray-200">
              <th
                scope="row"
                class="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">21</td>
              <td class="bg-gray-50 px-6 py-4">2300</td>
              <td class="px-6 py-4">24/09/2016</td>
            </tr>
            <tr class="border-b border-gray-200">
              <th
                scope="row"
                class="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900"
              >
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">1</td>
              <td class="bg-gray-50 px-6 py-4">2000</td>
              <td class="px-6 py-4">01/08/2016</td>
            </tr>
            <tr class="border-b border-gray-200">
              <th
                scope="row"
                class="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900"
              >
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">2</td>
              <td class="bg-gray-50 px-6 py-4">1021</td>
              <td class="px-6 py-4">02/01/2012</td>
            </tr>
            <tr class="border-b border-gray-200">
              <th
                scope="row"
                class="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900"
              >
                Google Pixel Phone
              </th>
              <td class="px-6 py-4">5</td>
              <td class="bg-gray-50 px-6 py-4">2014</td>
              <td class="px-6 py-4">30/10/2020</td>
            </tr>
            <tr>
              <th
                scope="row"
                class="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900"
              >
                Apple Watch 5
              </th>
              <td class="px-6 py-4">6</td>
              <td class="bg-gray-50 px-6 py-4">5100</td>
              <td class="px-6 py-4">21/10/2015</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transaction;
