import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { MovieContext } from '../../context'
import { getImgUrl } from '../../utils/cine-utility'
import MovieDetailsModal from './MovieDetailsModal'
import Rating from './Rating'

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const { state, dispatch } = useContext(MovieContext)
  const handleAddToCard = (e, movie) => {
    e.stopPropagation()
    const found = state.shoppingCardData.find((c) => c.id === movie.id)
    if (!found) {
      dispatch({
        type: 'ADD_TO_CARD',
        payload: {
          ...movie,
        },
      })
      toast.success(`${movie.title} added successfully`, {
        position: 'bottom-right',
      })
    } else {
      toast.error(`${movie.title} already has been added`, {
        position: 'bottom-right',
      })
    }
  }
  const handleSelectedMovie = (movie) => {
    setSelectedMovie(movie)
    setShowModal(true)
  }
  const handleModalClose = () => {
    setSelectedMovie(null)
    setShowModal(false)
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onAddCard={handleAddToCard}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleSelectedMovie(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button
              onClick={(e) => handleAddToCard(e, movie)}
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  )
}
