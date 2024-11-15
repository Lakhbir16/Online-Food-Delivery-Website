import React from "react";

export default function Food_card_2({ items }) {
  let n = 3;
  return (
    <div>
      <div class="w-[50rem] mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div class="md:flex">
          <div class="md:w-1/3">
            <img
              src={items.img_url}
              alt="Food Image"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="md:w-2/3 p-4">
            <h2 class="text-xl font-semibold mb-2">{items.DishName}</h2>
            <p class="text-gray-600 mb-4">
              Description of the dish goes here. It can be a brief overview of
              the ingredients and preparation method.
            </p>
            <div class="flex items-center mb-2 gap-0.5">
              <div>
                {items.Rating == 4 && (
                  <div className="flex mr-2">
                    {" "}
                    <img
                      className="w-5"
                      src="https://t4.ftcdn.net/jpg/05/40/09/17/360_F_540091788_AvDyNUSbtnKQfNccukuFa3ZlsHFnMYrK.png"
                      alt=""
                    />
                    <img
                      className="w-5"
                      src="https://t4.ftcdn.net/jpg/05/40/09/17/360_F_540091788_AvDyNUSbtnKQfNccukuFa3ZlsHFnMYrK.png"
                      alt=""
                    />
                    <img
                      className="w-5"
                      src="https://t4.ftcdn.net/jpg/05/40/09/17/360_F_540091788_AvDyNUSbtnKQfNccukuFa3ZlsHFnMYrK.png"
                      alt=""
                    />
                    <img
                      className="w-5"
                      src="https://t4.ftcdn.net/jpg/05/40/09/17/360_F_540091788_AvDyNUSbtnKQfNccukuFa3ZlsHFnMYrK.png"
                      alt=""
                    />
                  </div>
                )}
                {items.Rating == 5 && (
                  <div className="flex mr-2 gap-0.5">
                    {" "}
                    <img
                      className="w-5"
                      src="https://t4.ftcdn.net/jpg/05/40/09/17/360_F_540091788_AvDyNUSbtnKQfNccukuFa3ZlsHFnMYrK.png"
                      alt=""
                    />
                    <img
                      className="w-5"
                      src="https://t4.ftcdn.net/jpg/05/40/09/17/360_F_540091788_AvDyNUSbtnKQfNccukuFa3ZlsHFnMYrK.png"
                      alt=""
                    />
                    <img
                      className="w-5"
                      src="https://t4.ftcdn.net/jpg/05/40/09/17/360_F_540091788_AvDyNUSbtnKQfNccukuFa3ZlsHFnMYrK.png"
                      alt=""
                    />
                    <img
                      className="w-5"
                      src="https://t4.ftcdn.net/jpg/05/40/09/17/360_F_540091788_AvDyNUSbtnKQfNccukuFa3ZlsHFnMYrK.png"
                      alt=""
                    />
                     <img
                      className="w-5"
                      src="https://t4.ftcdn.net/jpg/05/40/09/17/360_F_540091788_AvDyNUSbtnKQfNccukuFa3ZlsHFnMYrK.png"
                      alt=""
                    />
                  </div>
                )}
              </div>

              <span class="text-gray-700">{items.Rating} (99+ Reviews)</span>
            </div>
            <div class="flex items-center mb-2">
              <span class="text-[17px] text-white font-normal mt-2 bg-gray-400 flex items-center justify-center w-28 rounded-xl">
                {items.Category}
              </span>
            </div>
            <div class="flex items-center">
              <span class="text-gray-700 text-[20px]">
                Price: ₹ {items.Price}{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
