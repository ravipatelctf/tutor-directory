import { useState } from "react";
import { Link } from "react-router-dom";
import { addNewTutor } from "../api/data";
import { toast } from "react-toastify";
import { districtsByStates } from "../dataForForm/districtsByStates";
import { statesAndUTs } from "../dataForForm/statesAndUTs";

export default function AddNewTutor() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [stateOrUT, setStateOrUT] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [landmark, setLandmark] = useState("");

  const districtsArray =
    country &&
    stateOrUT &&
    districtsByStates.find((element) => element.state === stateOrUT);

  async function handleTutorRegistration(e) {
    e.preventDefault();

    try {
      const newTutor = await addNewTutor({
        name,
        phoneNumber: Number(phoneNumber),
        country,
        stateOrUT,
        district,
        pincode: Number(pincode),
        landmark,
      });

      if (newTutor) {
        toast.success(
          `You are now registered as a home tutor in ${district}. Parents will contact you soon.`
        );
      }
    } catch (error) {
      toast.error("Tutor Registration Failed. Please try again later.");
    }

    setName("");
    setPhoneNumber("");
    setCountry("");
    setStateOrUT("");
    setDistrict("");
    setPincode("");
    setLandmark("");
  }

  return (
    <main className="max-w-xl mx-auto px-4 pt-4 pb-10">
      {/* Back Link */}
      <Link
        to="/"
        className="block w-full text-center border border-gray-800 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-800 hover:text-white transition"
      >
        Find a Home Tutor in your area
      </Link>

      <h1 className="text-center text-3xl font-bold mt-4 mb-6">
        Register as a Tutor
      </h1>

      {/* Form */}
      <form onSubmit={handleTutorRegistration} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full border rounded-lg px-3 py-2"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phoneNumber" className="block font-medium mb-1">
            Phone Number:
          </label>
          <input
            type="number"
            id="phoneNumber"
            placeholder="Enter your phone number"
            className="w-full border rounded-lg px-3 py-2"
            value={phoneNumber}
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block font-medium mb-1">
            Country:
          </label>
          <select
            id="country"
            className="w-full border rounded-lg px-3 py-2"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="" disabled>
              Select Country
            </option>
            <option value="India">India</option>
          </select>
        </div>

        {/* State / UT */}
        <div>
          <label htmlFor="stateOrUT" className="block font-medium mb-1">
            State / Union Territory:
          </label>
          <select
            id="stateOrUT"
            className="w-full border rounded-lg px-3 py-2"
            value={stateOrUT}
            required
            onChange={(e) => setStateOrUT(e.target.value)}
          >
            <option value="">State / Union Territory</option>
            {country &&
              statesAndUTs?.map((stateName) => (
                <option key={stateName} value={stateName}>
                  {stateName}
                </option>
              ))}
          </select>
        </div>

        {/* District */}
        <div>
          <label htmlFor="district" className="block font-medium mb-1">
            District:
          </label>
          <select
            id="district"
            className="w-full border rounded-lg px-3 py-2"
            value={district}
            required
            onChange={(e) => setDistrict(e.target.value)}
          >
            <option value="">District</option>
            {country &&
              stateOrUT &&
              districtsArray?.districts?.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
          </select>
        </div>

        {/* Pincode */}
        <div>
          <label htmlFor="pincode" className="block font-medium mb-1">
            Pincode:
          </label>
          <input
            type="number"
            placeholder="Enter pincode"
            className="w-full border rounded-lg px-3 py-2"
            value={pincode}
            required
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>

        {/* Landmark */}
        <div>
          <label htmlFor="landmark" className="block font-medium mb-1">
            Landmark:
          </label>
          <input
            type="text"
            placeholder="Enter a nearby landmark"
            className="w-full border rounded-lg px-3 py-2"
            value={landmark}
            required
            onChange={(e) => setLandmark(e.target.value)}
          />
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-gray-900 text-white font-semibold px-8 py-2 rounded-lg hover:bg-black transition"
          >
            Register
          </button>
        </div>
      </form>
    </main>
  );
}
