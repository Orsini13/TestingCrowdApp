import React from 'react'

const Progressbar = () => {
  return (
    <div>
        
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `${progress}%` }}>
          </div>
        </div>

    </div>
  )
}

export default Progressbar