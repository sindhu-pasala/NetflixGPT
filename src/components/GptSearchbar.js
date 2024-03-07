import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchbar = () => {
  const selectedLang = useSelector((store) => store?.appConfig?.lang);
  console.log(selectedLang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="grid grid-cols-12 bg-black w-1/2">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[selectedLang].gptSearchPlaceholder}
        ></input>
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 hover:bg-opacity-80 text-white rounded-lg">
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
