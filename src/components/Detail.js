import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const Detail = ({data}) => {
    const {id}=useParams()
const item=data.find(el=>el.id==id)
  return (
    <div>
     <h1>{item.name}</h1>
     <iframe src={ item.vidéo} title={item.name} style={{width:'300px',height:'200px'}}></iframe>
     <Link to='/'><button type='submit' style={{marginLeft:'100px', margintop:'200px',border:'none',borderRadius:'10px', width:'250px', height:'50px'}}>Go Home</button></Link>
     
     
    </div>
  )
}


 

export default Detail