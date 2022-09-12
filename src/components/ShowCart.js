import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { aincrement, adecrement } from "../redux/asus/action";
import { cdecrement, cincrement } from "../redux/canon/action";
import { dincrement, ddecrement } from "../redux/dell/action";

export default function ShowCart() {
  const asusCount = useSelector((state) => state.asus.value);
  const asusPrice = useSelector((state) => state.asus.price);
  console.log(asusPrice);
  const asusDispatch = useDispatch();
  const asusIncrementHandler = (value) => {
    asusDispatch(aincrement(value));
  };

  const asusDecrementHandler = (value) => {
    asusDispatch(adecrement(value));
  };

  const canonCount = useSelector((state) => state.canon.value);
  const canonPrice = useSelector((state) => state.canon.price);
  console.log(canonPrice);
  const canonDispatch = useDispatch();

  const canonIncrementHandler = (value) => {
    canonDispatch(cincrement(value));
  };

  const canonDecrementHandler = (value) => {
    canonDispatch(cdecrement(value));
  };

  const dellCount = useSelector((state) => state.dell.value);
  const dellPrice = useSelector((state) => state.dell.price);
  console.log(dellPrice);
  const dellDispatch = useDispatch();

  const dellIncrementHandler = (value) => {
    dellDispatch(dincrement(value));
  };
  const dellDecrementHandler = (value) => {
    dellDispatch(ddecrement(value));
  };

  // Total Count of Product and price
  const totalCount = asusCount + canonCount + dellCount;
  const totalPrice = asusPrice + canonPrice + dellPrice;

  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        <div className="flex justify-between border-b-2 mb-2">
          <div className="text-lg py-2">
            <p>Asus Vivobook X515MA</p>
          </div>
          <div className="text-lg py-2">
            <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
              <button
                className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                onClick={() => asusDecrementHandler(1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18 12H6"
                  />
                </svg>
              </button>
              <p>{asusCount}</p>
              <button
                className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                onClick={() => asusIncrementHandler(1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between border-b-2 mb-2">
          <div className="text-lg py-2">
            <p>Dell E1916HV 18.5 Inch</p>
          </div>
          <div className="text-lg py-2">
            <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
              <button
                className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                onClick={() => dellDecrementHandler(1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18 12H6"
                  />
                </svg>
              </button>
              <p>{dellCount}</p>
              <button
                className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                onClick={() => dellIncrementHandler(1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="flex justify-between border-b-2 mb-2">
          <div class="text-lg py-2">
            <p>Canon Eos 4000D 18MP</p>
          </div>
          <div class="text-lg py-2">
            <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
              <button
                class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                onClick={() => canonDecrementHandler(1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18 12H6"
                  />
                </svg>
              </button>
              <p>{canonCount}</p>
              <button
                class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                onClick={() => canonIncrementHandler(1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="flex justify-center items-center text-center">
          <div class="text-xl font-semibold">
            <p>Total Item</p>
            <p class="text-5xl">{totalCount}</p>
          </div>
        </div>
      </div>
      <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        <div class="flex justify-center items-center text-center">
          <div class="text-xl font-semibold">
            <p>Total Price</p>
            <p class="text-5xl">{totalPrice}tk</p>
          </div>
        </div>
      </div>
    </div>
  );
}
