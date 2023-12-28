
import React, { useState, useEffect } from 'react';

const apiEndpoint = 'https://picsum.photos/v2/list?page=1&limit=6';

const CreateFrom = () => {
  const [cardsData, setCardsData] = useState([]);
  const [modalData, setModalData] = useState({ mode: '', cardId: null });
  const [formData, setFormData] = useState({
    author: '',
    // Add other fields as needed
  });
  const [formErrors, setFormErrors] = useState({});

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
        <div className="card" key={card.id} onClick={() => viewCardDetails(card.id)}>
          <img style={{ width: '100%', height: 'auto', marginBottom: '10px' }} src={card.download_url} alt="Random Image" />
          <div className="card-details">
            {/* Add card details here (e.g., author, edit, delete buttons) */}
            <button className="gap-4 p-1 space-x-1 bg-green-300 rounded-lg " onClick={() => openCardModal('edit', card.id)}>Edit</button>
            <button  className="gap-4 p-1 space-x-1 bg-red-400 rounded-lg " onClick={() => deleteCard(card.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );

  // Function to open the modal for adding or editing cards
  const openCardModal = (mode, cardId) => {
    setModalData({ mode, cardId });

    if (mode === 'edit') {
      const cardToEdit = cardsData.find((card) => card.id === cardId);
      setFormData({ author: cardToEdit.author, /* Add other fields as needed */ });
    } else {
      setFormData({ author: '', /* Add other fields as needed */ });
    }
  };

  // Function to handle the submission of the card form
  const submitCardForm = () => {
    // Validate form fields
    const errors = {};
    if (!formData.author.trim()) {
      errors.author = 'Author is required';
      
    }
    // Add validation for other fields as needed

    if (Object.keys(errors).length === 0) {
      // Form is valid, perform the necessary action (create or edit card)
      if (modalData.mode === 'edit') {
        // Add logic to edit the card
      } else {
        // Add logic to create a new card
        setCardsData([...cardsData, { id: Date.now(), ...formData }]);
      }

      // Close the modal after successful submission
      closeCardModal();
    } else {
      // Update form errors
      setFormErrors(errors);
    }
  };

  // Function to close the modal
  const closeCardModal = () => {
    setModalData({ mode: '', cardId: null });
    setFormData({ author: '', /* Add other fields as needed */ });
    setFormErrors({});
  };

  // Function to view detailed information about a card in a modal
  const viewCardDetails = (cardId) => {
    // Add your code to retrieve the card details and display them in a modal
    openCardModal('view', cardId);
  };

  // Function to edit an existing card
  const editCard = (cardId) => {
    openCardModal('edit', cardId);
  };

  // Function to delete a card
  const deleteCard = (cardId) => {
    // Add your code to delete the card and update the UI
    const updatedCards = cardsData.filter((card) => card.id !== cardId);
    setCardsData(updatedCards);
    closeCardModal(); // Close the modal if it's open
  };

  return (
    <div className="app">
      <div className="cards-dashboard">{displayCards()}</div>

      {/* Modal for adding and editing cards */}
      {modalData.mode && (
        <div className="modal" id="cardModal">
          {/* Add your modal content here based on the Figma design */}
          <form>
            <label>
              Author:
              <input className='space-x-3 border border-black rounded-s first-letter:' 
                type="text"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              />
              {formErrors.author && <span className="error">{formErrors.author}</span>}
            </label>
            {/* Add other form fields as needed */}
            <button className="gap-4 p-1 bg-green-400 rounded-lg" type="button" onClick={submitCardForm}>
              {modalData.mode === 'edit' ? 'Update Card' : 'Add Card'}
              </button>
              <button className="p-1 bg-red-400 rounded-lg" type="button" onClick={closeCardModal}>
               Cancel
              </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreateFrom;





