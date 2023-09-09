import React from 'react'

const Card = () => {
  return (
    <div className='flex flex-col gap-2 w-[250px] h-[300px] bg-slate-400 rounded-lg p-4'>
      <div className='bg-slate-800 w-8 h-8 flex justify-center align-center text-yellow-50 font-bold'>1</div>
      <div className='bg-slate-600 flex '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque animi dolorem amet delectus nulla facere quaerat reiciendis fugit, at modi consequuntur odio perferendis qui! Debitis quam at maxime voluptatibus nisi.</div>
      <div className='bg-slate-200 text-center rounded-sm text-xl'>Title</div>
    </div>
  )
}

export default Card
// {body.substr(0, 150)}