import { useEffect, useState } from "react";
import Food_card_2 from "../components/food_card_2";


export default function Menu() {
  let api = "http://localhost:8080/menu";
  let [items, setItems] = useState([]);
  console.log(items);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      let data = await res.json();

      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(api);
  }, []);

  return (
    <>
      <div className="bg-slate-700 h-auto pb-16">
        <div className="flex justify-center ">
          <div className="flex justify-center w-[60rem] h-52 mb-3 mt-5 bg-white">
            <img
              className="w-[50rem] object-cover"
              src="https://indiasrestaurant.com/wp-content/uploads/2023/09/How-Long-Does-Indian-Food-Last-in-the-Fridge-1024x614.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-center mb-20">
          <p className="text-[45px] font-sans font-semibold text-slate-500 uppercase">
            Fulfill Your <span className="text-red-500">Comfort Food</span>{" "}
            Craving{" "}
          </p>
        </div>

        <div className="flex justify-center gap-5 ">
          <div className="w-44 h-10 bg-white shadow-lg items-center justify-center flex rounded-md">
            Location
          </div>
          <input
            class="bg-white p-2 w-[40rem] rounded-md shadow-lg outline-none "
            type="text"
            placeholder="Search food"
          />
        </div>
        {/* -------------------------------------------------------------------------------------- */}

        <div className="flex gap-5 mt-10 justify-center">
          <div className="bg-white w-64 h-[27rem] rounded-lg overflow-hidden">
            <div class="flex flex-col w-64 ml-5 border-r">
              <div class="p-4">
                <h2 class="text-lg font-semibold mb-4">Filter</h2>
                <div class="mb-4 flex flex-col">
                  <span class="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </span>
                  <label for="curries" class="inline-flex items-center">
                    <input
                      type="checkbox"
                      id="curries"
                      name="category"
                      value="curries"
                      class="form-checkbox text-blue-500"
                    />
                    <span class="ml-2">Curries</span>
                  </label>
                  <label for="biryani" class="inline-flex items-center">
                    <input
                      type="checkbox"
                      id="biryani"
                      name="category"
                      value="biryani"
                      class="form-checkbox text-blue-500"
                    />
                    <span class="ml-2">Biryani</span>
                  </label>
                  <label for="tandoori" class="inline-flex items-center">
                    <input
                      type="checkbox"
                      id="tandoori"
                      name="category"
                      value="tandoori"
                      class="form-checkbox text-blue-500"
                    />
                    <span class="ml-2">Tandoori</span>
                  </label>
                  <label for="dosas" class="inline-flex items-center">
                    <input
                      type="checkbox"
                      id="dosas"
                      name="category"
                      value="dosas"
                      class="form-checkbox text-blue-500"
                    />
                    <span class="ml-2">Dosas</span>
                  </label>
                  <label for="samosas" class="inline-flex items-center">
                    <input
                      type="checkbox"
                      id="samosas"
                      name="category"
                      value="samosas"
                      class="form-checkbox text-blue-500"
                    />
                    <span class="ml-2">Samosas</span>
                  </label>
                  <label for="chaat" class="inline-flex items-center">
                    <input
                      type="checkbox"
                      id="chaat"
                      name="category"
                      value="chaat"
                      class="form-checkbox text-blue-500"
                    />
                    <span class="ml-2">Chaat</span>
                  </label>
                  <label for="paneer" class="inline-flex items-center">
                    <input
                      type="checkbox"
                      id="paneer"
                      name="category"
                      value="paneer"
                      class="form-checkbox text-blue-500"
                    />
                    <span class="ml-2">Paneer Dishes</span>
                  </label>
                  <label for="roti" class="inline-flex items-center">
                    <input
                      type="checkbox"
                      id="roti"
                      name="category"
                      value="roti"
                      class="form-checkbox text-blue-500"
                    />
                    <span class="ml-2">Roti/Naan</span>
                  </label>
                  <label for="dal" class="inline-flex items-center">
                    <input
                      type="checkbox"
                      id="dal"
                      name="category"
                      value="dal"
                      class="form-checkbox text-blue-500"
                    />
                    <span class="ml-2">Dal</span>
                  </label>
                  <label for="biryanis" class="inline-flex items-center">
                    <input
                      type="checkbox"
                      id="biryanis"
                      name="category"
                      value="biryanis"
                      class="form-checkbox text-blue-500"
                    />
                    <span class="ml-2">Biryanis</span>
                  </label>
                </div>
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              {items && items.map((data) =><Food_card_2 items={data} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
