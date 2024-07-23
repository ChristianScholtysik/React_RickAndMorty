import { IResult } from "../Interface/RickandMortyResponse";
import CharacterList from "./CharacterList";
import "./Output.css";

interface OutputProps {
  results: IResult[];
}

const Output: React.FC<OutputProps> = ({ results }) => {
  return <CharacterList results={results} />;
};

export default Output;
