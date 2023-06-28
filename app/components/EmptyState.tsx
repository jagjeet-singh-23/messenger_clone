import React from 'react'

const EmptyState = () => {
  return (
    <div
        className='
            px-4
            py-10
            sm:px-6
            lg:px-8
            h-full
            flex
            justify-center
            items-center
            bg-gray-100
        '
    >
        <div className='flex flex-col items-center test-center'>
            <h3 className='mt-2 text-gray-900 font-semibold text-2xl'>
                Select a chat or start a new conversation
            </h3>
        </div>
    </div>
  )
}

export default EmptyState