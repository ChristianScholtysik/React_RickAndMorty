import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IResult } from "../Interface/RickandMortyResponse";

const SingleCharacterPage = () => {
  const [characterDataDetail, setCharacterDataDetail] =
    useState<IResult | null>(null);

  const { id } = useParams<{ id?: string }>();
  console.log(id);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacterDataDetail(data))
      .catch((err) => console.error("Fehler Detail page", err));
  }, [id]);
  console.log(characterDataDetail);

  return (
    <>
      <div className="card card-compact bg-stone-400 w-96 shadow-xl text-red-700">
        <figure>
          <img src={characterDataDetail?.image} alt="" />
        </figure>
        <div className="card-body">
          <h2> {characterDataDetail?.name}</h2>
          <p>{characterDataDetail?.location.name}</p>
          <p>{characterDataDetail?.origin.name}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-amber-600 border-none">
              <Link to="/character">Back</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCharacterPage;
