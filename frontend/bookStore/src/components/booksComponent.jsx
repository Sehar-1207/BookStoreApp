import list from "../../public/books.json";
import Cards from "./cards";

function Books() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-screen-2xl mx-auto md:px-10 px-4 pt-8">
        {/* Intro Section */}
        <div className="space-y-3 text-gray-900 dark:text-gray-100">
          <h1 className="text-2xl md:text-3xl text-center font-semibold">
            We warmly welcome you all to Your{" "}
            <span className="text-orange-500">exciting Journey!</span>
          </h1>
          <p className="text-md md:text-lg leading-relaxed">
            In a world filled with stories waiting to be told, each page offers
            a new adventure, a fresh perspective, and a chance to escape the
            ordinary. As you embark on this literary journey, may you find
            inspiration, knowledge, and the joy that comes from immersing
            yourself in the written word. Every chapter holds a unique
            experience, inviting you to ponder, dream, and reflect. So settle
            in, turn the page, and let the next adventure begin!
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap mt-6">
          {list.map((item) => (
            <div className="p-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              key={item.id}>
                <Cards item={item} />
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Books;