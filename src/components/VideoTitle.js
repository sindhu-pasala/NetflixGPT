const VideoTitle = ({ title, overview }) => {
  return (
    <div className="py-[15%] px-20 absolute text-white bg-gradient-to-r from-black w-screen aspect-videos">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview.slice(0, 150)}...</p>
      <div>
        <button className="py-2.5 px-4 bg-white text-black hover:bg-opacity-80 rounded-md w-28 font-semibold mr-3">
          ▶️ Play
        </button>
        <button className="py-2.5 px-4 rounded-md w-28 bg-gray-500 bg-opacity-50 font-bold">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
