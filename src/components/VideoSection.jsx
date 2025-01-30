import React from 'react'
import video from '../../public/video/Tecoreng_Video.mp4'

function VideoSection() {
    return (
        <div className='bg-[#01132e]'>
            <div className="bg-gradient-to-b from-[#5A82A0] via-[#1A486E] to-transparent opacity-50 h-14"
            >
            </div>

            <div className='p-15'>
                <video src={video} className="h-auto w-[95%] m-auto rounded-3xl" controls autoPlay></video>
            </div>

        </div>

    )
}

export default VideoSection