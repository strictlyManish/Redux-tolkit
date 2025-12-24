
function Card({ data }) {
  const { title, description, tags } = data;

  return (
     <div className="bg-[#0b1220] rounded-2xl md:rounded-3xl overflow-hidden border border-gray-800 shadow-lg  transition duration-300 h-full flex flex-col">
      {/* Content */}
      <div className="p-3 sm:p-4 md:p-5 flex flex-col gap-3 flex-grow">
        <h2 className="text-white text-base sm:text-lg md:text-xl font-semibold leading-snug line-clamp-2">
          {title}
        </h2>

        <p className="text-gray-400 text-xs sm:text-sm md:text-sm leading-relaxed line-clamp-3 flex-grow">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags && tags.length > 0 ? (
            tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2.5 sm:px-3 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700 whitespace-nowrap truncate"
              >
                {tag}
              </span>
            ))
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Card;
