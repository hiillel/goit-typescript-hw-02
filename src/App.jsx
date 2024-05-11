import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { Toaster, toast } from "react-hot-toast";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [mainLoading, setMainLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    if (searchQuery !== "") {
      setMainLoading(true);
      setError(null);

      axios
        .get(
          `https://api.unsplash.com/search/photos?page=${currentPage}&query=${searchQuery}&client_id=j2dKGfoZPwz7_wS0rkmgVXCHfszEyOuHoksVie8iG1Y`
        )
        .then((res) => {
          setImages((prevImages) => [...prevImages, ...res.data.results]);
          setTotalPages(res.data.total_pages);
          if (res.data.results.length === 0) {
            toast.error("Nothing was found for your request");
          }
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setMainLoading(false);
          setLoadingMore(false);
        });
    }
  }, [searchQuery, currentPage]);

  const handleSubmit = (searchQuery) => {
    if (searchQuery.trim() !== "") {
      setSearchQuery(searchQuery);

      setImages([]);
      setCurrentPage(1);
    } else {
      toast.error("Enter your search term!");
    }
  };

  const loadMoreImages = () => {
    if (currentPage < totalPages) {
      setLoadingMore(true);
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {mainLoading && <Loader />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {!mainLoading && currentPage < totalPages && (
        <>
          <LoadMoreBtn onLoadMore={loadMoreImages} />
          {loadingMore && <Loader />}
        </>
      )}
      {error && <ErrorMessage error={error} />}

      <Toaster position="top-right" reverseOrder={false} />
      <ImageModal
        isOpen={modalIsOpen}
        onCloseModal={closeModal}
        image={selectedImage}
      />
    </div>
  );
};

export default App;