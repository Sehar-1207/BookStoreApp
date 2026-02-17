import Cards from "./cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderSettings from "./sliderSettings";
import axios from 'axios';
import { useEffect, useState } from "react";

function FreeBook() {
//  const settings = sliderSettings();
  const [book ,setBook] = useState([]);
  useEffect(()=>{
const getBooks= async()=>{
  try{
    const res = await axios.get("http://localhost:4001/api/books");
    console.log(res.data);
    setBook(res.data.filter((data) => {
    return data.category === "Free";
  }));
  }
  catch(error){
    console.log("Error", error);
  }
};
getBooks();
  },[])

return (
    <div
      className="max-w-screen-2xl container mx-auto md:px-20 px-6 pt-4 bg-white dark:bg-gray-900 ">
      <div>
        <h1 className="text-xl font-bold pb-2 text-black dark:text-white">
          Free Available Books
        </h1>

        <p className="pb-6 text-gray-600 dark:text-gray-300">
          Whenever one wants escape from the world, read books.
        </p>
      </div>

      <div className="slider-container">
        <Slider {...sliderSettings}>
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FreeBook;