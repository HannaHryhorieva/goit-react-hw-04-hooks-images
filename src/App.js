// import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Searchbar from './components/Searchbar/Searchbar';
import Loader from 'react-loader-spinner';
import Modal from './components/Modal/Modal';
import apiService from './apiServiсe/apiService';

export default function App() {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [tags, setTags] = useState('false');

  useEffect(() => {
    if (searchValue === '') {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      apiService(searchValue, page)
        .then(respons => setImages(images => [...images, ...respons.hits]))
        .catch(error => toast.error(`${error}`))
        .finally(() => {
          setLoading(false);
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        });
    }, 1000);
  }, [page, searchValue]);

  const onHandleSearch = searchValue => {
    setImages([]);
    setPage(1);
    setSearchValue(searchValue);
  };

  const onLoadMore = () => {
    setPage(page => page + 1);
  };
  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };
  const openModal = e => {
    toggleModal();
    const idImage = Number(e.target.id);
    const image = images.find(image => image.id === idImage);

    setLargeImageURL(image.largeImageURL);
    setTags(image.tags);
  };
  return (
    <div className="App">
      <Searchbar onSubmit={onHandleSearch} />
      <ImageGallery images={images} onClick={openModal} />
      <Loader
        className="Loader"
        visible={loading}
        type="Grid"
        color="#3f51b5"
        height={200}
        width={200}
      />
      {images.length > 0 && (
        <div>
          <Button onClick={onLoadMore} />
        </div>
      )}
      {showModal && (
        <Modal imageUrl={largeImageURL} tags={tags} onClose={toggleModal} />
      )}
      <ToastContainer autoClose={2000} />
    </div>
  );
}
