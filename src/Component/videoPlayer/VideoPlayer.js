import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import "./index.scss";

// Icon
import { FaPlay, FaPause } from "react-icons/fa";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";

const format = (seconds) => {
  if (isNaN(seconds)) {
    return `00:00`;
  }
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }
  return `${mm}:${ss}`;
};
let count = 0;
export default function VideoPlayer({ video }) {
  const [state, setState] = useState({
    play: false,
    muted: false,
    screen: true,
    volume: 1,
    played: 0,
    seeking: false,
  });

  const playerContainerRef = useRef();
  const playRef = useRef();
  const controlsRef = useRef();

  const handlePlay = () => {
    setState({ ...state, play: !state.play });
  };

  const handleMute = () => {
    setState({ ...state, muted: !state.muted });
  };
  const handleVolume = (e) => {
    setState({
      ...state,
      volume: parseFloat(e.target.value / 100),
      muted: e.target.value == 0 ? true : false,
    });
    // console.log(muted);
  };
  const handleFullScreen = () => {
    screenfull.toggle(playerContainerRef.current);
    setState({ ...state, screen: !screen });
  };
  const handleProgress = (changeState) => {
    // console.log(changeState);
    if (count > 3) {
      controlsRef.current.style.visibility = "hidden";
      count = 0;
    }

    if (controlsRef.current.style.visibility == "visible") {
      count += 1;
    }

    setState({ ...state, ...changeState });
  };
  const handleSeek = (e) => {
    setState({
      ...state,
      played: parseFloat(e.target.value / 100),
    });
  };

  const handleMouseDown = (e) => {
    setState({ ...state, seeking: true });
  };

  const handleMouseUp = (e) => {
    setState({ ...state, seeking: false });
    playRef.current.seekTo(e.target.value / 100, "fraction");
  };

  const currentTime =
    playRef && playRef.current ? playRef.current.getCurrentTime() : "00:00";

  const duration =
    playRef && playRef.current ? playRef.current.getDuration() : "00:00";

  const totalDuration = format(duration);

  const handleMouseMove = () => {
    controlsRef.current.style.visibility = "visible";
  };

  // Distructure State
  const { play, muted, screen, volume, played } = state;

  return (
    <div
      className="video-wrapper"
      ref={playerContainerRef}
      onMouseMove={handleMouseMove}
    >
      <ReactPlayer
        ref={playRef}
        url={video}
        playing={play}
        width="100%"
        height="100%"
        wrapper="wrapper"
        muted={muted}
        volume={volume}
        onProgress={handleProgress}
      />
      <div className={`controller-video `} ref={controlsRef}>
        {/* Play Control */}
        <div className="playPauseButton">
          <div className="btn-playPause" onClick={handlePlay}>
            {play ? <FaPause /> : <FaPlay />}
          </div>
        </div>
        {/* Control bar */}
        <div className="control-bar">
          <input
            type="range"
            min={0}
            max={100}
            className="progress-video"
            value={played * 100}
            onChange={handleSeek}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          />
          <div className="control-bar-video">
            <div className="left-control">
              <div className="btn-control-play" onClick={handlePlay}>
                {play ? <FaPause /> : <FaPlay />}
              </div>
              <p>
                {format(currentTime)} / {totalDuration}
              </p>
              <div className="btn-control-volume" onClick={handleMute}>
                {muted ? <HiVolumeOff /> : <HiVolumeUp />}
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={muted ? 0 : volume * 100}
                onChange={handleVolume}
                className="input-volume"
              />
            </div>
            <div className="right-control">
              <div
                className="btn-control-fullscreen"
                onClick={handleFullScreen}
              >
                {screen ? <BsFullscreen /> : <BsFullscreenExit />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
