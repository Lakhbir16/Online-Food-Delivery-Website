import React from "react";

export default function Food_card_3({value}) {
  let n = 3;
  console.log(value);
  return (
    <div>
      <div class="w-[50rem] mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div class="md:flex">
          <div class="md:w-1/3">
            <img
              src={value.img}
              alt="Food Image"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="md:w-2/3 p-4">
            <h2 class="text-xl font-semibold mb-2">{value.name}</h2>
            <p class="text-gray-600 mb-4">
              Description of the dish goes here. It can be a brief overview of
              the ingredients and preparation method.
            </p>
            <div class="flex items-center mb-2 gap-0.5">
              {/* <div>
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
              </div> */}

              <span class="text-gray-700">{value.rating} (99+ Reviews)</span>
            </div>
            <div class="flex items-center mb-2">
              <span class="text-[17px] text-white font-normal mt-2 bg-gray-400 flex items-center justify-center w-28 rounded-xl">
                {value.catogary}
              </span>
            </div>
            <div class="flex items-center">
              <span class="text-gray-700 text-[20px]">
                Price: ₹ {value.price}{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
