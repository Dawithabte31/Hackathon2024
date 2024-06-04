import React, { useState } from "react";

//This component helps the admin to manage the users that are the buyers and sellers
function RegisteredUsers() {
  return (
    <div className="flex flex-col gap-8">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <h2 className="my-4 text-center text-3xl">Registered sellers</h2>
        <table class="w-full text-left text-sm text-gray-500 rtl:text-right">
          <thead class="bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" class="px-6 py-3">
                Company Name
              </th>
              <th scope="col" class="px-6 py-3">
                TIN Number
              </th>
              <th scope="col" class="px-6 py-3">
                Business Type
              </th>
              <th scope="col" class="px-6 py-3">
                Capital
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" class="px-6 py-3">
                Address
              </th>
              <th scope="col" class="px-6 py-3">
                UserName
              </th>
              <th scope="col" class="px-6 py-3">
                Password
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b bg-white hover:bg-gray-50">
              <th
                scope="row"
                class="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
              >
                Qelem Meda
              </th>
              <td class="px-6 py-4">00235412</td>
              <td class="px-6 py-4">Technology</td>
              <td class="px-6 py-4">1200000</td>
              <td class="px-6 py-4">qelemeda@gmail.com</td>
              <td class="px-6 py-4">+251968705424</td>
              <td class="px-6 py-4">Kombolcha</td>
              <td class="px-6 py-4">qelemMeda12</td>
              <td class="px-6 py-4">12345678</td>

              <td class="flex items-center px-6 py-4">
                <a href="#" class="font-medium text-blue-600 hover:underline">
                  Edit
                </a>
                <a
                  href="#"
                  class="ms-3 font-medium text-red-600 hover:underline"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr class="border-b bg-white hover:bg-gray-50">
              <th
                scope="row"
                class="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
              >
                Microsoft
              </th>
              <td class="px-6 py-4">00235512</td>
              <td class="px-6 py-4">Technology</td>
              <td class="px-6 py-4">2300000</td>
              <td class="px-6 py-4">microsoft@outlook.com</td>
              <td class="px-6 py-4">+251968705400</td>
              <td class="px-6 py-4">Debre Markos</td>

              <td class="px-6 py-4">microsoft365</td>
              <td class="px-6 py-4">12005678</td>
              <td class="flex items-center px-6 py-4">
                <a href="#" class="font-medium text-blue-600 hover:underline">
                  Edit
                </a>
                <a
                  href="#"
                  class="ms-3 font-medium text-red-600 hover:underline"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr class="border-b bg-white hover:bg-gray-50">
              <th
                scope="row"
                class="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
              >
                Apple
              </th>
              <td class="px-6 py-4">00335412</td>
              <td class="px-6 py-4">Technology</td>
              <td class="px-6 py-4">3210000</td>
              <td class="px-6 py-4">apple@gmail.com</td>
              <td class="px-6 py-4">+251968700024</td>
              <td class="px-6 py-4">Hawassa</td>
              <td class="px-6 py-4">apple35</td>

              <td class="px-6 py-4">12300678</td>
              <td class="flex items-center px-6 py-4">
                <a href="#" class="font-medium text-blue-600 hover:underline">
                  Edit
                </a>
                <a
                  href="#"
                  class="ms-3 font-medium text-red-600 hover:underline"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr class="border-b bg-white hover:bg-gray-50">
              <th
                scope="row"
                class="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
              >
                Tesfu construct
              </th>
              <td class="px-6 py-4">00235499</td>
              <td class="px-6 py-4">Construction</td>
              <td class="px-6 py-4">5100000</td>
              <td class="px-6 py-4">tesfu@gmail.com</td>
              <td class="px-6 py-4">+251968705424</td>
              <td class="px-6 py-4">Bahir Dar</td>
              <td class="px-6 py-4">tesfu23</td>
              <td class="px-6 py-4">12345600</td>
              <td class="flex items-center px-6 py-4">
                <a href="#" class="font-medium text-blue-600 hover:underline">
                  Edit
                </a>
                <a
                  href="#"
                  class="ms-3 font-medium text-red-600 hover:underline"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr class="border-b bg-white hover:bg-gray-50">
              <th
                scope="row"
                class="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
              >
                AfroCytech
              </th>
              <td class="px-6 py-4">00235438</td>
              <td class="px-6 py-4">Construction</td>
              <td class="px-6 py-4">12500000</td>
              <td class="px-6 py-4">afroCytech@gmail.com</td>
              <td class="px-6 py-4">+251900870424</td>
              <td class="px-6 py-4">Addis Ababa</td>

              <td class="px-6 py-4">afroCytech12</td>

              <td class="px-6 py-4">12345008</td>
              <td class="flex items-center px-6 py-4">
                <a href="#" class="font-medium text-blue-600 hover:underline">
                  Edit
                </a>
                <a
                  href="#"
                  class="ms-3 font-medium text-red-600 hover:underline"
                >
                  Remove
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <h2 className="my-4 text-center text-3xl">Registered Buyers</h2>
          <table class="w-full text-left text-sm text-gray-500 rtl:text-right">
            <thead class="bg-gray-50 text-xs uppercase text-gray-700">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Full Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Email Address
                </th>
                <th scope="col" class="px-6 py-3">
                  Phone Number
                </th>
                <th scope="col" class="px-6 py-3">
                  Address
                </th>
                <th scope="col" class="px-6 py-3">
                  UserName
                </th>
                <th scope="col" class="px-6 py-3">
                  Password
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b bg-white hover:bg-gray-50">
                <th
                  scope="row"
                  class="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                >
                  Caleb Tesfaye
                </th>
                <td class="px-6 py-4">caleb@gmail.com</td>
                <td class="px-6 py-4">+251921607264</td>
                <td class="px-6 py-4">Kombolcha, street 1</td>
                <td class="px-6 py-4">caleb5050</td>
                <td class="px-6 py-4">12345678</td>
                <td class="flex items-center px-6 py-4">
                  <a href="#" class="font-medium text-blue-600 hover:underline">
                    Edit
                  </a>
                  <a
                    href="#"
                    class="ms-3 font-medium text-red-600 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
              <tr class="border-b bg-white hover:bg-gray-50">
                <th
                  scope="row"
                  class="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                >
                  Abyssinia Financial Solutions
                </th>
                <td class="px-6 py-4">abyssinia12@gmail.com</td>
                <td class="px-6 py-4">+2511245475</td>
                <td class="px-6 py-4">Sodere</td>
                <td class="px-6 py-4">abyssinia92</td>
                <td class="px-6 py-4">21212121</td>
                <td class="flex items-center px-6 py-4">
                  <a href="#" class="font-medium text-blue-600 hover:underline">
                    Edit
                  </a>
                  <a
                    href="#"
                    class="ms-3 font-medium text-red-600 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
              <tr class="border-b bg-white hover:bg-gray-50">
                <th
                  scope="row"
                  class="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                >
                  Ahmed Technologies
                </th>
                <td class="px-6 py-4">ahmedtech@gmail.com</td>
                <td class="px-6 py-4">+251978451200</td>
                <td class="px-6 py-4">Bati</td>
                <td class="px-6 py-4">tekishahmed12</td>
                <td class="px-6 py-4">22232425</td>
                <td class="flex items-center px-6 py-4">
                  <a href="#" class="font-medium text-blue-600 hover:underline">
                    Edit
                  </a>
                  <a
                    href="#"
                    class="ms-3 font-medium text-red-600 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RegisteredUsers;
