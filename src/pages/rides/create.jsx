import { ethers } from "ethers";
import { useState } from "react";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import { abi } from "../../constants/abi";
import { toast } from "react-hot-toast";

export default function Create() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departuretime, setDeparturetime] = useState("");
  const [fare, setFare] = useState("");
  const [seats, setSeats] = useState("");
  const [idUpload, setIdUpload] = useState(""); // New state for ID upload
  const [phoneNumber, setPhoneNumber] = useState(""); // New state for phone number
  const router = useRouter();
  const { isConnected } = useAccount();

  const creatRide = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(
      "0x7bff0B4fA24968478263493eFB42712fA650A1ab",
      abi,
      signer
    );
    const departureTimeUInt = parseInt(departuretime, 10);
    const fareUInt = parseInt(fare, 10);
    const seatsUInt = parseInt(seats, 10);
    const createARide = await contract.createride(
      origin,
      destination,
      departureTimeUInt,
      fareUInt,
      seatsUInt,
      idUpload,
      phoneNumber
    );
    await createARide.wait();
    console.log(createARide);
    toast("Ride created successfully");
    router.push("/");
  };

  return (
    <div>
      <div className="max-w-md mx-auto bg-white shadow-md p-8 rounded-lg text-gray-900 mt-10">
        <h2 className="text-2xl font-semibold mb-4">Create Ride</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            creatRide();
          }}
        >
          <div className="mb-4">
            <label htmlFor="origin" className="block font-semibold mb-1">
              Origin:
            </label>
            <input
              type="text"
              id="origin"
              name="origin"
              className="w-full border rounded py-2 px-3"
              placeholder="Enter origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="destination" className="block font-semibold mb-1">
              Destination:
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              className="w-full border rounded py-2 px-3"
              placeholder="Enter destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="departuretime" className="block font-semibold mb-1">
              Departure Time:
            </label>
            <input
              type="number"
              id="departuretime"
              name="departuretime"
              className="w-full border rounded py-2 px-3"
              placeholder="Enter departure time (e.g., 1300)"
              value={departuretime}
              onChange={(e) => setDeparturetime(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fare" className="block font-semibold mb-1">
              Fare:
            </label>
            <input
              type="text"
              id="fare"
              name="fare"
              className="w-full border rounded py-2 px-3"
              placeholder="Enter fare"
              value={fare}
              onChange={(e) => setFare(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="seats" className="block font-semibold mb-1">
              Seats:
            </label>
            <input
              type="number"
              id="seats"
              name="seats"
              className="w-full border rounded py-2 px-3"
              placeholder="Enter number of seats"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
            />
          </div>
          {/* ID Upload */}
          <div className="mb-4">
            <label htmlFor="idUpload" className="block font-semibold mb-1">
              ID Upload:
            </label>
            <input
              type="file"
              id="idUpload"
              name="idUpload"
              className="w-full border rounded py-2 px-3"
              // You may need to handle file upload changes
              onChange={(e) => setIdUpload(e.target.files[0])}
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block font-semibold mb-1">
              Phone Number:
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className="w-full border rounded py-2 px-3"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          {/* Submit button */}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
