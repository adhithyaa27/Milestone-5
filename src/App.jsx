import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setFakeData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Fetch data only once on component mount

  const handleClick = () => {
    setShowContent(!showContent);
  };

  return (
    <React.Fragment>
      <button onClick={handleClick}>CLICK</button>
      <div className="fake-data">
        {showContent &&
          fakeData.map((data) => (
            <div key={data.id}>
              <h3>{data.category}</h3>
              <img src={data.image} alt={data.category} />
            </div>
          ))}
      </div>
    </React.Fragment>
  );
}

export default App;
