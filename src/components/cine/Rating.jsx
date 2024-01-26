import start from '../../assets/star.svg'

export default function Rating({ value }) {
  const ratings = Array(value).fill(start)
  return (
    <>
      {ratings.map((rating, index) => (
        <img key={index} src={rating} width="14" height="14" alt="" />
      ))}
    </>
  )
}
