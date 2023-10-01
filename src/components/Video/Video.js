import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { useEffect, useRef, useState } from 'react';
import { MoreIcon } from '../Icons/icons';
import VolumeControl from './VolumeControl';
import VideoControl from './VideoControl';
import PlayVideo from './PlayVideo';
const cx = classNames.bind(styles);

function Video({
   volumecontrol = false,
   videocontrol = false,
   playvideo = false,
   more = false,
   VideoControlClasses,
   VolumeControlClasses,
   className,
   src,
}) {
   const videoRef = useRef();
   const [showControl, setShowControl] = useState(true);
   if (VideoControlClasses === true) {
      VideoControlClasses = cx(
         'containerClass',
         'seekBarContainClass',
         'seekBarProgressClass',
         'seekBarCircleClass',
         'seeBarBoldClass',
         'timeContainClass',
      );
   }
   if (VolumeControlClasses === true) {
      VolumeControlClasses = cx(
         'voiceControlContain',
         'volumeControlContent',
         'volumeControlProgress',
         'volumeControlCircle',
         'volumeControlBar',
         'soundIcon',
      );
   }
   useEffect(() => {
      const video = videoRef.current;
      const handleIntersection = (entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               video.play();
            } else {
               video.pause();
            }
         });
      };
      const options = {
         rootMargin: '0px',
         threshold: [0.7, 0.75],
      };

      const observer = new IntersectionObserver(handleIntersection, options);

      if (video) {
         observer.observe(video);
      }
      return () => {
         if (video) {
            observer.unobserve(video);
         }
      };
   }, []);
   return (
      <div className={className}>
         <video ref={videoRef} className={cx('video')} src={src} loop muted autoPlay playsInline />
         {showControl && (
            <div>
               {more && <MoreIcon className={cx('more-icon')} />}
               {playvideo && <PlayVideo videoRef={videoRef} />}
               {videocontrol && <VideoControl videoRef={videoRef} className={VideoControlClasses} />}
               {volumecontrol && <VolumeControl videoRef={videoRef} className={VolumeControlClasses} />}
            </div>
         )}
      </div>
   );
}

export default Video;
