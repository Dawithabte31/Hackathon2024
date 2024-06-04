import React, { useState } from "react";
import AddItems from "./AddItems";
function ManageTaxes() {
  // this state is to track the form that is used to fill the taxes dynamically
  const [isOpen, setIsOpen] = useState(false);

  // this is to handle the click event that is triggered when "Add New Item" is clicked
  function handleAddNew() {
    setIsOpen(true);
  }

  // the state manages the number of items added to the table
  const [taxes, setTaxes] = useState([
    { ProductName: "Car" },
    { VAT: 15 },
    { TOT: 10 },
    { Excise: 300 },
    { Customs: 10 },
    { Sur: 5 },
  ]);

  return (
    //This is where tha admin manages the tax types
    <div>
      <h2 className="my-4 text-center text-3xl capitalize">
        Tax type value Management
      </h2>
      <div className="my-4 flex justify-end overflow-hidden rounded-lg text-white">
        <button
          onClick={handleAddNew}
          className="rounded-lg bg-sky-500 px-8 py-2"
        >
          Add New Item
        </button>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" className="border-r-2 px-6 py-3">
                Product name
              </th>
              <th scope="col" className="border-r-2 px-6 py-3">
                Customs
              </th>
              <th scope="col" className="border-r-2 px-6 py-3">
                Excise
              </th>
              <th scope="col" className="border-r-2 px-6 py-3">
                VAT
              </th>
              <th scope="col" className="border-r-2 px-6 py-3">
                Sur
              </th>
              <th scope="col" colSpan={2} className="border-r-2 px-6 py-3">
                TOT
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="col" className="border-r-2 px-6 py-3">
                Car
              </td>
              <td scope="col" className="border-r-2 px-6 py-3">
                10
              </td>
              <td scope="col" className="border-r-2 px-6 py-3">
                25
              </td>
              <td scope="col" className="border-r-2 px-6 py-3">
                15
              </td>
              <td scope="col" className="border-r-2 px-6 py-3">
                5
              </td>
              <td scope="col" colSpan={2} className="border-r-2 px-6 py-3">
                2
              </td>
            </tr>
            {taxes.map((tax) => {
              <tr>
                <td scope="col" className="border-r-2 px-6 py-3">
                  {tax.ProductName}
                </td>
                <td scope="col" className="border-r-2 px-6 py-3">
                  {tax.Customs}
                </td>
                <td scope="col" className="border-r-2 px-6 py-3">
                  {tax.Excise}
                </td>
                <td scope="col" className="border-r-2 px-6 py-3">
                  {tax.VAT}
                </td>
                <td scope="col" className="border-r-2 px-6 py-3">
                  {tax.Sur}
                </td>
                <td scope="col" colSpan={2} className="border-r-2 px-6 py-3">
                  {tax.TOT}
                </td>
              </tr>;
            })}
          </tbody>
        </table>

        {/* this is the specific place that passes props to the AddItem component */}

        {isOpen && (
          <AddItems isOpen={isOpen} setIsOpen={setIsOpen} setTaxes={setTaxes} />
        )}
      </div>
    </div>
  );
}

export default ManageTaxes;
