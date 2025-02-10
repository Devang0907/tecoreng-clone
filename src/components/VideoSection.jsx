import React,{ useState } from 'react';
import smallVideo from '../../public/video/Tecoreng_Video.mp4';
import fullVideo from '../../public/video/Tecoreng_fullVideo.mp4';
import play_img from '../../public/images/play-img.svg';

function VideoSection() {
   const [video,setVideo] = useState(smallVideo);

    function handleVideo(){
        setVideo(fullVideo) 
    }
    return (
        <div className='bg-[#01132e]'>
            <div className="bg-gradient-to-b from-[#5A82A0] via-[#1A486E] to-transparent opacity-50 h-14"
            >
            </div>

            <div className='p-3 sm:p-15 relative'>
                <video src={video} className="h-auto w-[95%] m-auto rounded-3xl" loop muted autoPlay></video>
                <span className='absolute right-32 bottom-23 h-[100px] w-[100px] p-8 bg-gradient-to-r from-[#03142e] to-[#223d65] cursor-pointer rounded-full flex justify-center'
                onClick={handleVideo}
                >
                        <img src={play_img} classname='' alt="" />
                </span>

            </div>

        </div>

    )
}

export default VideoSection