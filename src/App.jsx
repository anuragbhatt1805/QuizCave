import { useEffect } from "react";
import { Assessment } from "./Assessment"
import { contest, result } from "./info"

function App() {

  useEffect(() => {
    window.document.title = `WBT - ${contest?.name}`;
  }, []);

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  if (!isDesktop) {
    return (
      <>
        <div className="text-red-500">
          Please Open in Desktop Browser
        </div>
      </>
    )
  }

  // useEffect(() => {
  //   const handleFullScreen = () => {
  //     if (document.documentElement.requestFullscreen) {
  //       if (document.documentElement.fullscreenEnabled) {
  //         document.documentElement.requestFullscreen();
  //       } else {
  //         console.error("Fullscreen is not supported.");
  //       }
  //     } else if (document.documentElement.mozRequestFullScreen) { // Firefox
  //       if (document.documentElement.mozFullScreenEnabled) {
  //         document.documentElement.mozRequestFullScreen();
  //       } else {
  //         console.error("Fullscreen is not supported.");
  //       }
  //     } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
  //       if (document.documentElement.webkitFullscreenEnabled) {
  //         document.documentElement.webkitRequestFullscreen();
  //       } else {
  //         console.error("Fullscreen is not supported.");
  //       }
  //     } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
  //       if (document.documentElement.msFullscreenEnabled) {
  //         document.documentElement.msRequestFullscreen();
  //       } else {
  //         console.error("Fullscreen is not supported.");
  //       }
  //     }
  //   };

  //   handleFullScreen();
  // }, []);

  return (
    <>
      <Assessment contest={contest} result={result} />
    </>
  )
}

export default App
