import React from 'react'

export default function Journal() {
    return (
        <div>
            <div className='text-center text-6xl font-base text-white'>Journal</div>

            <div className='grid place-items-center py-10'>
                <div class="flex flex-wrap -mx-3 mb-6 bg-gray-300 w-[36rem] rounded-lg p-4">
                    <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">Add your progress</h2>
                    <div class="w-full md:w-full px-3 mb-2 mt-2">
                        <textarea class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Type your progress' required></textarea>
                    </div>
                    <div class="w-full md:w-full flex items-start px-3">
                        <div class="-mr-1">
                            <input type='submit' class="bg-tertiary text-white font-medium py-1 px-4 border text-xl rounded-lg tracking-wide mr-1 cursor-pointer" value='Post Update' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
