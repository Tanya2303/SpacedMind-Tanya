import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import RelaxedVlogMusic from '../assets/relaxed-vlog.mp3'
import LofiStudeyMusic from '../assets/lofi-study.mp3'
import PleaseCalmMusic from '../assets/please-calm-my-mind.mp3'
import TheBeatOfNatureMusic from '../assets/the-beat-of-nature.mp3'

export default function Music() {
    return (
        <div>
            <div className='text-center text-6xl font-base text-white'>Music</div>

            <div className="flex flex-wrap flex-col-2 justify-around w-full px-16" >

                <div className="m-8">
                    <div className="w-[20rem] h-56 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg">
                        <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white">Relaxed Vlog</div>
                        <div className='bg-white -mt-[3.2rem] grid place-items-center'>
                            <ReactAudioPlayer src={RelaxedVlogMusic} controls />
                        </div>
                    </div>
                </div>

                <div className="m-8">
                    <div className="w-[20rem] h-56 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg">
                        <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white">Lofi Study</div>
                        <div className='bg-white -mt-[3.2rem] grid place-items-center'>
                            <ReactAudioPlayer src={LofiStudeyMusic} controls />
                        </div>
                    </div>
                </div>

                <div className="m-8">
                    <div className="w-[20rem] h-56 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg">
                        <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white">Calm My Mind</div>
                        <div className='bg-white -mt-[3.2rem] grid place-items-center'>
                            <ReactAudioPlayer src={PleaseCalmMusic} controls />
                        </div>
                    </div>
                </div>

                <div className="m-8">
                    <div className="w-[20rem] h-56 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg">
                        <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white">The Beat of Nature</div>
                        <div className='bg-white -mt-[3.2rem] grid place-items-center'>
                            <ReactAudioPlayer src={TheBeatOfNatureMusic} controls />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
