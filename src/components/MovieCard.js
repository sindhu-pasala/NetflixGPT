import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 p-1 m-1">
      <img alt="poster" src={POSTER_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
