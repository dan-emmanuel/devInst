
const Cards = ({user}) => {
  // const {user} = props;
  const {name, email, username,id} = user;
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?size=200x200`} />
      <h4>{name}</h4>
      <p>{email}</p>
      <p>{username}</p>
    </div>
  )
}
export default Cards;
