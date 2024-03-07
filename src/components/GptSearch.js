import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchbar from "./GptSearchbar";

const GptSearch = () => {
  return (
    <div>
      <img className="absolute -z-10" alt="" src={BG_URL} />
      <GptSearchbar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
