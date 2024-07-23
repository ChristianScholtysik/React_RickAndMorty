import "./Search.css";
import { useState } from "react";
import { IStatus, IGender } from "../Interface/RickandMortyResponse";

const Search: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<IStatus>();
  const [selectedGender, setSelectedGender] = useState<IGender>();

  const handleSearch = () => {
    console.log("Hello Search");
  };

  return (
    <>
      <section className=" gap-4 flex flex-col w-80 justify-center items-center text-stone-900">
        <label className="input input-bordered flex items-center gap-2 w-80 justify-center bg-stone-400 text-stone-900 ">
          <input
            type="text"
            className="grow text-stone-900  placeholder:text-stone-900"
            placeholder="Search"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSearchInput(event.target.value)
            }
            value={searchInput}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fill-rule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </label>
        <select
          className="select select-bordered w-full max-w-xs bg-stone-400 text-stone-900"
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            setSelectedStatus(event.target.value as IStatus)
          }
          value={selectedStatus}>
          <option disabled selected>
            Filter by status
          </option>
          <option>Alive</option>
          <option>Dead</option>
          <option>Unknown</option>
        </select>
        <select
          className="select select-bordered w-full max-w-xs bg-stone-400 text-stone-900"
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            setSelectedGender(event.target.value as IGender)
          }
          value={selectedGender}>
          <option disabled selected>
            Filter by Gender
          </option>
          <option>Male</option>
          <option>Female</option>
          <option>Genderless</option>
          <option>Unknown</option>
        </select>
        <button
          onClick={handleSearch}
          className="btn bg-sky-600  w-64 border-transparent text-white hover:bg-amber-600 hover:border-transparent ">
          Search
        </button>
      </section>
    </>
  );
};
export default Search;
