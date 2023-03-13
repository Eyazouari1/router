import React, { useState } from 'react';
import Modal from 'react-modal';
import StarRating from './StarRating';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const EditMovie = ({ handleEdit ,movie}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState({
    name: movie.name,
    date: movie.date,
    image: movie.image,
    rating: movie.rating,
  });

  const handlechange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
    const handlerating =(rate) =>setForm({...form,rating:rate});

  const handleSubmit = (e) => {
    e.preventDefault();
    let newMovie = { ...form, id: movie.id };
    handleEdit(newMovie);
    closeModal();
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {};

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className='run' onClick={openModal}>
        Edit 
      </button>
      {/* <button className='btn-primary' onClick={closeModal}>
        Delete
      </button> */}
      <div className='modal'>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <div className='form' style={{border:'1px solid'}}>
          <form onSubmit={handleSubmit}>
            <label>Movie name</label><div>
            <input type='text' value={form.name} name='name' onChange={handlechange}  className='input'/></div>
            <label>Release date</label>
            <div><input type='date' value={form.date} name='date' onChange={handlechange} className='input'/></div>
           
            <label>Movie poster</label>
            <div>  <input type='URL' value={form.image} name='image' onChange={handlechange} className='input'/></div>
            <StarRating  rat={form.rating} handleRating={handlerating}  className='rat'/>
            <button type='submit' className='add'>Add</button>
            <button onClick={closeModal} className='cancel'>Cancel</button>
            
          </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default EditMovie;