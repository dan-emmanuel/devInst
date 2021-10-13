import React from 'react';
import Card from './Card';


const CardsList = (props) => {
  const {robots} = props;
  return(
    <div className="tc">
    {
      robots.map( (item,i) => {
        return <Card data={item} key={i}/>
      })
    }
    </div>
  )
}
export default CardsList;
