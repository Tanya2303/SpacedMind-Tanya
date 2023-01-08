import React from 'react'

export default function Chatroom() {
    return (
        <div>
            <div className='text-center text-6xl font-base text-white'>Chatroom</div>
            <div className='grid place-items-center py-10'>
                <div className='border-2 border-tertiary rounded-b-md'>
                    <div className='border-2 border-tertiary rounded-t-md bg-gray-500 p-4 w-[36rem] overflow-y-scroll flex flex-col h-128 max-w-7xl min-w-7xl'></div>
                    <form className="w-full flex justify-center">
                        <input
                            className="h-8 p-2 w-full focus:outline-none rounded-bl-lg" />
                        <button type="submit" className="w-16 font-bold tracking-wider text-white bg-gradient-to-r from-primary to-tertiary">SEND</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
