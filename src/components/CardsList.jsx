import React from 'react'
import Card from './Card'

const CardsList = ({data}) => {
    // const {id, title, body} = {data}
    // console.log(data[1])
  return (
    <div className='w-full h-screen bg-black flex flex-col text-white'>
      <div className=' bg-slate-900 flex flex-col gap-4 h-fit'>
        <h1 className='text-center text-4xl font-extrabold mb-4 '>List of Cards</h1>
        <div className='flex flex-row flex-wrap m-6 p-1 justify-center'>
            {data.map((cardData,index)=>{
                return(
                    <Card key={index} cardData = {cardData}/>
                )
            })}
            
        </div>
      </div>
    </div>
  )
}

export default CardsList
