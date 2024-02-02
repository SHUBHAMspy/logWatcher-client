import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/log')
  }

  return (
    <div className='flex justify-center items-center h-full'>
      <button 
        className='p-3 bg-purple-700 rounded-lg text-white font-bold'
        onClick={handleClick}
      >
        Go to Logs
      </button>
    </div>
  )
}

export default Home