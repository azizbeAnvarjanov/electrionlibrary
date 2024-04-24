import React from 'react'
import { useParams } from 'react-router-dom';

const BoookDetails = ({ params }) => {

    const data = useParams();
    console.log(data.id);

  return (
    <div>BoookDetails {data.id}</div>
  )
}

export default BoookDetails