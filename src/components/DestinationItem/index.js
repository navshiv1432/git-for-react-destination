import './index.css'

const DestinationItem = props => {
  const {DestinationDetail} = props
  const {id, name, imgUrl} = DestinationDetail
  return (
    <li>
      <img src={imgUrl} className="age" alt="age" />
      <h1 className="head">{name}</h1>
    </li>
  )
}
export default DestinationItem
