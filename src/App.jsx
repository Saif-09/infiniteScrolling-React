import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import CardsList from "./components/CardsList";

function App() {
  // State to keep track of the current page number and the fetched card data
  const [page, setPage] = useState(1);
  const [card, setCard] = useState([]);

  // Function to fetch data from an API and update the card state
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      const data = response.data;
      // Append the new data to the existing card data
      setCard((prev) => [...prev, ...data]);
    } catch (error) {
      console.error(error);
    }
  }, [page]);

  // useEffect to fetch data when the page changes or when the component mounts
  useEffect(() => {
    fetchData();
  }, [page]);

  // Function to implement infinite scrolling by updating the page number when scrolled to the bottom
  const infiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      // Increment the page number when scrolled to the bottom
      setPage((prev) => prev + 1);
      console.log('Scrolled');
    }
  }

  // useEffect to add and remove the scroll event listener for infinite scrolling
  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll);

    // Clean up by removing the event listener when the component unmounts
    return () => window.removeEventListener('scroll', infiniteScroll);
  }, []);

  // Render the CardsList component with the fetched card data
  return (
    <>
      <CardsList data={card} />
    </>
  )
}

export default App;
