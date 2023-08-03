import 'vidstack/styles/defaults.css';
import 'vidstack/styles/community-skin/video.css';
import { MediaCommunitySkin, MediaOutlet, MediaPlayer, MediaPoster } from '@vidstack/react';

export default function Video({ title, src, aspectRatio, style }: { title: string, src: string, aspectRatio: number, style: any }) {
  return (
    <MediaPlayer
      title={title}
      src={src}
      aspectRatio={aspectRatio}
      style={style}
    >
      <MediaOutlet
        style={style}
      >
        <MediaPoster
          alt={title}
        />
      </MediaOutlet>
      <MediaCommunitySkin />
    </MediaPlayer>
  )
}