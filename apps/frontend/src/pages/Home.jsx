import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { getAllTutors } from "../api/data";
import { districtsByStates } from "../dataForForm/districtsByStates";
import { statesAndUTs } from "../dataForForm/statesAndUTs";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [tutorsData, setTutorsData] = useState([]);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

  const districtsArray =
    country &&
    state &&
    districtsByStates.find((element) => element.state === state);

  async function handleBtnClick() {
    try {
      if (country && state && district) {
        const data = await getAllTutors({
          country,
          stateOrUT: state,
          district,
        });

        if (data.length === 0) {
          setLoading(false);
          setMessage(
            `We could not find any home tutors in ${district} right now. Please check back soon...`
          );
          return;
        }

        setMessage(null);
        setLoading(false);
        setError(false);
        setTutorsData(data);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-4">
      <Link
        to="/register-as-a-tutor"
        className="w-full block text-center border border-gray-800 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-800 hover:text-white transition"
      >
        Get Registered as a Home Tutor
      </Link>

      <div className="text-center mt-6">
        <h1 className="text-4xl font-extrabold">Tutor Directory</h1>

        {/* --- Filters --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {/* Country */}
          <select
            id="country"
            className="border px-3 py-2 rounded-lg"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="" disabled>
              Select Country
            </option>
            <option value="India">India</option>
          </select>

          {/* State */}
          <select
            id="state"
            className="border px-3 py-2 rounded-lg"
            required
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="" disabled>
              Select State / Union Territory
            </option>
            {country &&
              statesAndUTs?.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
          </select>

          {/* District */}
          <select
            id="district"
            className="border px-3 py-2 rounded-lg"
            required
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          >
            <option value="" disabled>
              Select District
            </option>
            {country &&
              state &&
              districtsArray?.districts?.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
          </select>
        </div>

        {/* Button */}
        <button
          className="mt-6 bg-gray-900 text-white font-bold py-2 px-6 rounded-lg hover:bg-black transition"
          onClick={() => {
            setTutorsData([]);
            if (country && state && district) {
              setError(false);
              setMessage(null);
              setLoading(true);
              handleBtnClick();
            } else {
              toast.warn("All fields are required!");
            }
          }}
        >
          Find Tutor
        </button>
      </div>

      {/* Messages */}
      {message && <p className="text-center mt-4">{message}</p>}
      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && (
        <p className="text-center mt-4">
          An error occurred... Please refresh the page.
        </p>
      )}

      {/* Tutors List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {tutorsData?.length > 0 ? (
          tutorsData.map((tutor) => (
            <div
              key={tutor._id}
              className="border rounded-xl p-6 shadow-sm bg-white"
            >
              <h3 className="text-2xl font-bold mb-4">{tutor.name}</h3>

              <p>
                <span className="font-bold">Country: </span>
                {tutor.country}
              </p>
              <p>
                <span className="font-bold">State: </span>
                {tutor.stateOrUT}
              </p>
              <p>
                <span className="font-bold">District: </span>
                {tutor.district}
              </p>
              <p>
                <span className="font-bold">Landmark: </span>
                {tutor.landmark}
              </p>

              <div className="mt-4">
                <button
                onClick={() =>
                    window.open(
                    `https://wa.me/${tutor.phoneNumber}?text=Hi%20I%20found%20your%20tutor%20profile%20and%20want%20to%20connect.`,
                    "_blank"
                    )
                }
                className="flex gap-2 justify-center w-full border border-green-600 text-green-700 font-semibold py-2 rounded-lg hover:bg-green-600 hover:text-white transition"
                >
                <FaWhatsapp size="1.5em" />
                <span>{tutor.phoneNumber}</span>
                </button>

              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-2">{message}</p>
        )}
      </div>
    </div>
  );
}
