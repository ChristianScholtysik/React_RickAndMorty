import { Link } from "react-router-dom";
import { IResult } from "../Interface/RickandMortyResponse";
import SingleCharacter from "./SingleCharacter";

interface IAllCharacterProps {
  results: IResult[];
}

const CharacterList: React.FC<IAllCharacterProps> = (props) => {
  const { results } = props;

  return (
    <section className="list">
      {results?.map((singleCharacter, index) => (
        <SingleCharacter key={index} singleCharacter={singleCharacter} />
      ))}
      <button className="btn bg-amber-600 border-none">
        <Link to="/">Back</Link>
      </button>
    </section>
  );
};

export default CharacterList;
