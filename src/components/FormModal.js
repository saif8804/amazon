import React from "react";

const FormModal = ({ closeModal }) => {
  return (
    <>
      <div
        className="fixed top-0 right-0 left-0 bottom-0 bg-gray-100 opacity-80"
        onClick={closeModal}
      ></div>
      <div className="">
        <div className=" absolute top-[50%] left-[50%]">
          <form
            className="w-[500px] h-[700px] bg-white border border-black -translate-x-[50%] -translate-y-[35%]  rounded"
            // onClick={(e) => e.preventDefault()}
          >
            <div className=" border-b-2 border-gray-100">
              <h2 className="font-bold text-xl p-2">
                Enter a new delivery address.
              </h2>
            </div>
            <p className="p-2 font-bold text-xl">Add a new address</p>
            <div className="m-4">
              <h2 className="font-bold">Country/Region</h2>
              <select
                id="country"
                name="country"
                className="w-full border-4 border-green-800 rounded-md "
              >
                <option value="India">India</option>
                <option value="Pakitan">Pakistan</option>
                <option value="China">China</option>
                <option value="bangladesh">Bangladesh</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Newzealand">Newzealand</option>
                <option value="Australia">Australia</option>
                <option value="Africa">Africa</option>
                <option value="Korea">Korea</option>
              </select>
              <h2 className="font-bold pt-2">
                Full name (First and Last Name)
              </h2>
              <input
                type="text"
                className="w-full border-4 border-green-800 rounded-md "
              />
              <h2 className="font-bold pt-2">Mobile Number</h2>
              <input
                type="text"
                className="w-full border-4 border-green-800 rounded-md "
              />
              <h2 className="font-bold pt-2">Pincode</h2>
              <input
                type="text"
                placeholder="6-digits[0-9] PIN CODE"
                className="w-full border-4 border-green-800 rounded-md px-2 "
              />
              <h2 className="font-bold pt-2">
                Flat, House no., Building, Company, Apartment
              </h2>
              <input
                type="text"
                className="w-full border-4 border-green-800 rounded-md px-2 "
              />
              <h2 className="font-bold pt-2">Area, Street, Sector, Village</h2>
              <input
                type="text"
                className="w-full border-4 border-green-800 rounded-md "
              />
              <h2 className="font-bold pt-2">Landmark</h2>
              <input
                type="text"
                className="w-full border-4 border-green-800 rounded-md "
              />
              <div className="pt-2 flex justify-between">
                <div>
                  <h2 className="font-bold">Town/City</h2>
                  <input
                    type="text"
                    className="w-full border-4 border-green-800 rounded-md "
                  />
                </div>
                <div>
                  <h2 className="font-bold">State</h2>
                  <input
                    type="text"
                    className="w-full border-4 border-green-800 rounded-md "
                  />
                </div>
              </div>
              <div className="pt-2 flex gap-2">
                <input type="checkbox" />
                <p>Make this my default address</p>
              </div>

              <button
                className="mt-2 bg-orange-500 py-2 px-4 rounded-md"
                onClick={closeModal}
              >
                Use this address
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormModal;