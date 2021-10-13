import React from 'react';

const Card = (props) => {
  const {data} = props;
  // console.log(data);
  const {name, email, id,username} = data;
  return(
    <>
      <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <img src={`https://robohash.org/${id}?size=200x200`} />
        <h2>{name}</h2>
        <p>{email}</p>
        <h4>{username}</h4>
      </div>
    </>
  )
}
export default Card;
