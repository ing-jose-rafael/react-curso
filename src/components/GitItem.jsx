
const GitItem = ({title,url}) => {
  return (
    <div className="card-grid">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
    // <li key={ id }>{title}</li>
  )
}

export default GitItem