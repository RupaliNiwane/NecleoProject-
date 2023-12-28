import React from 'react';
import { Link } from 'react-router-dom';

const MyProjectCard = () => {

   const onclickhandle = (e)=>{
    console.log (e.target.value)
   
   }
  return (
   <>
    <div className="container h-auto p-4 mt-5 ml-5 bg-white rounded-md shadow-lg w-96">
    <h1 className="mb-4 text-2xl font-bold">Welcome to My Project</h1>
   {/* Add additional content or features of your card here */}
    <div className="container h-auto p-4 mt-4 ml-0 text-center bg-white rounded-md shadow-lg w-86">
       
        <Link to='/clickhere' >
        <button onClick={onclickhandle}> Click Here+ </button> 
        </Link>
    </div>

     <h2>Create a new project or 
     try a sample project </h2>
    
      </div>
   </>
  );
};

const MyProject = () => {
  return (
  <>    
  
     <div className=''>
      <MyProjectCard />
    </div>
    
  </>
  );
};

export default MyProject;


// import React, { useState, useEffect } from 'react';

// const apiEndpoint = 'https://picsum.photos/v2/list?page=1&limit=6';

// const MyProject = () => {
//   const [cardsData, setCardsData] = useState([]);
//   const [modalData, setModalData] = useState({ mode: '', cardId: null });
//   const [formData, setFormData] = useState({
//     author: '',
//     // Add other fields as needed
//   });
//   const [formErrors, setFormErrors] = useState({});

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // Fetch data from the Lorem Picsum API
//   const fetchData = async () => {
//     try {
//       const response = await fetch(apiEndpoint);
//       const data = await response.json();
//       setCardsData(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   // Function to display cards on the dashboard
//   const displayCards = () => {
//     return (
//       <div className="cards-container">
//         {cardsData.map((card) => (
//           <div className="card" key={card.id}>
//             <img style={{ width: '100%', height: 'auto' }} src={card.download_url} alt="Random Image" />
//             <div className="card-details">
//               <h3>{card.author}</h3>
//               <button onClick={() => openCardModal('edit', card.id)}>Edit</button>
//               <button onClick={() => deleteCard(card.id)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   // Function to open the modal for adding or editing cards
//   const openCardModal = (mode, cardId) => {
//     setModalData({ mode, cardId });

//     if (mode === 'edit') {
//       const cardToEdit = cardsData.find((card) => card.id === cardId);
//       setFormData({ author: cardToEdit.author, /* Add other fields as needed */ });
//     } else {
//       setFormData({ author: '', /* Add other fields as needed */ });
//     }
//   };

//   // Function to close the modal
//   const closeCardModal = () => {
//     setModalData({ mode: '', cardId: null });
//     setFormData({ author: '', /* Add other fields as needed */ });
//     setFormErrors({});
//   };

//   // Function to handle form submission
//   const handleFormSubmit = () => {
//     // Validate form fields
//     const errors = {};
//     if (!formData.author.trim()) {
//       errors.author = 'Author is required';
//     }
//     // Add validation for other fields as needed

//     if (Object.keys(errors).length === 0) {
//       // Form is valid, perform the necessary action (create or edit card)
//       if (modalData.mode === 'edit') {
//         // Add logic to edit the card
//       } else {
//         // Add logic to create a new card
//       }

//       // Close the modal after successful submission
//       closeCardModal();
//     } else {
//       // Update form errors
//       setFormErrors(errors);
//     }
//   };

//   // Function to handle card deletion
//   const deleteCard = (cardId) => {
//     // Add your code to delete the card and update the UI
//   };

//   return (
//     <div className="app">
//       <div className="dashboard">{displayCards()}</div>

//       {/* Modal for adding and editing cards */}
//       {modalData.mode && (
//         <div className="modal" id="cardModal">
//           {/* Add your modal content here based on the Figma design */}
//           <form>
//             <label>
//               Author:
//               <input
//                 type="text"
//                 value={formData.author}
//                 onChange={(e) => setFormData({ ...formData, author: e.target.value })}
//               />
//               {formErrors.author && <span className="error">{formErrors.author}</span>}
//             </label>
//             {/* Add other form fields as needed */}
//             <button type="button" onClick={handleFormSubmit}>
//               {modalData.mode === 'edit' ? 'Update Card' : 'Add Card'}
//             </button>
//             <button type="button" onClick={closeCardModal}>
//               Cancel
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyProject;




















































































































