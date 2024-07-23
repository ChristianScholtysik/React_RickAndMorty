import { Link } from "react-router-dom";
import { IResult } from "../Interface/RickandMortyResponse";

interface ISingleCharacterProps {
  singleCharacter: IResult;
}

const SingleCharacter: React.FC<ISingleCharacterProps> = (props) => {
  return (
    <Link to={`/character/${props.singleCharacter.id}`}>
      <h2>{props.singleCharacter.name}</h2>
    </Link>
  );
};

export default SingleCharacter;
