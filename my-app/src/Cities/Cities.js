import React from 'react';
import City from './City/City';

const Cities = (props) =>

     props.list.map( (c) => {
console.log(c.city);
     //return <City name={c.city} country={c.country} />
} );


export default Cities;
