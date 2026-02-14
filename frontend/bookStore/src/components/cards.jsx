

function Cards({ item }) {
  // Dummy image URL for fallback
  const fallbackImage =
    "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=500&auto=format&fit=crop";

  return (
    <div className="mt-4 my-3 p-3">
      <div
        className="card w-full h-100 shadow-lg cursor-pointer transition-all duration-300 
    bg-base-100 dark:bg-slate-800 
    text-black dark:text-white
    border border-transparent dark:border-white
    hover:scale-105 hover:shadow-xl "
      >
        {/* Fixed Image Container */}
        <figure className="h-50 overflow-hidden">
          <img
            src={item.imageUrl || fallbackImage}
            alt={item.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = fallbackImage;
            }} // If URL is broken, load fallback
          />
        </figure>

        <div className="card-body p-4 flex flex-col justify-between">
          <div>
            <h2 className="card-title text-lg font-bold">
              {item.name}
              <div className="badge bg-orange-500 outline-none text-white ml-2">
                {item.category}
              </div>
            </h2>
            {/* Using line-clamp to keep text length consistent across all cards */}
            <p className="text-sm mt-2 line-clamp-3 opacity-80">{item.title}</p>
          </div>

          <div className="card-actions justify-between items-center mt-4">
            <div className="btn btn-sm btn-outline hover:bg-orange-500 hover:text-white transition-colors duration-200 text-md rounded-full border-orange-500 text-orange-500 px-3 py-2">
              ${item.price}
            </div>
            <button className="btn btn-sm btn-outline hover:bg-orange-500 hover:text-white transition-colors duration-200 rounded-full border-orange-500 text-orange-500 px-4">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
