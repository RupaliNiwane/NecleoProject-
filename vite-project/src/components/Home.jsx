import React, { useState, useEffect } from 'react';

const apiEndpoint = 'https://picsum.photos/v2/list?page=1&limit=6';

const App = () => {
  const [cardsData, setCardsData] = useState([]);
  const [modalData, setModalData] = useState({ mode: '', cardId: null });

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch data from the Lorem Picsum API
  const fetchData = async () => {
    try {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      setCardsData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to display cards on the dashboard
  const displayCards = () => (
    <div className="cards-container">
      {cardsData.map((card) => (
        <div className="card" key={card.id}>
          <img style={{ width: '100%', height: 'auto', marginBottom: '10px' }} src={card.download_url} alt="Random Image" />
          <div className="card-details">
            {/* Add card details here (e.g., author, edit, delete buttons) */}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="app">
      <div className="sidebar">
        {/* Add your sidebar content here */}
        
      </div>
      <div className="dashboard">{displayCards()}</div>
      {/* Modal for adding and editing cards */}
      {modalData.mode && (
        <div className="modal" id="cardModal">
          {/* Add your modal content here based on the Figma design */}
          Modal Content Placeholder
        </div>
      )}
    </div>
  );
};

export default App;







// import React from 'react';

// function Home() {
//   return (
//     <>
//     <h1 className='justify-center mt-2 text-center'><b>Welcome To Dashboard</b></h1>
//     <div className="flex flex-wrap justify-center">
   
      
//       {/* First row */}
//       <div className='flex'>
//         <img className='mt-4 pl-7' src='/public/image/images1.jpg' style={{ width: '40%', height: 'auto' }} alt="Image 1" />
//         <img className='mt-4 pl-7' src='/public/image/images2.jpg' style={{ width: '40%', height: 'auto' }} alt="Image 2" />
//         <img className='mt-4 pl-7' src='/public/image/images3.jpg' style={{ width: '30%', height: 'auto' }} alt="Image 3" />
//       </div>

//       {/* Second row */}
//       {/* <div className='flex'>
//         <img className='mt-4 pl-7' src='/public/image/images3.jpg' style={{ width: '20%', height: 'auto' }} alt="Image 3" />
//         <img className='mt-4 pl-' src='/public/image/images4.jpg' style={{ width: '20%', height: 'auto' }} alt="Image 4" />
//       </div> */}
//     </div>
//     </>
//   );
// }

// export default Home;


















