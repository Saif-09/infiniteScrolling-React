import React from 'react'

const Card = ({cardData}) => {
    const {id,title,body} = cardData;
    // console.log({title,id})
  return (
    <div className='flex flex-col gap-2 w-[250px] h-[300px] bg-slate-400 rounded-lg p-4 m-2 mb-8'>
      <div className='bg-slate-800 w-8 h-8 flex justify-center align-center text-yellow-50 font-bold'>{id}</div>
      <div className='bg-slate-600 flex '>{body.substr(0,150)}</div>
      <div className='bg-slate-200 text-center rounded-sm text-xl text-gray-900 uppercase font-bold'>{title.substr(0,20)}</div>
    </div>
  )
}

export default Card
