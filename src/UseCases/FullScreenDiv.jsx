import { useRef } from "react";

export const FullscreenDiv = () => {
  const divRef = useRef(null);

  // Function to toggle full-screen mode for the div
  const handleFullScreen = () => {
    const div = divRef.current;

    if (!document.fullscreenElement) {
      if (div.requestFullscreen) {
        div.requestFullscreen();
      } else if (div.mozRequestFullScreen) {
        // Firefox
        div.mozRequestFullScreen();
      } else if (div.webkitRequestFullscreen) {
        // Chrome, Safari and Opera
        div.webkitRequestFullscreen();
      } else if (div.msRequestFullscreen) {
        // IE/Edge
        div.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleExitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <div>
      <div
        ref={divRef}
        style={{
          width: "100%",
          height: "300px",
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          rowGap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <h1>Full Screen with Div</h1>
        <button onClick={handleExitFullScreen}>Exit Full Screen</button>
      </div>
      <button onClick={handleFullScreen}>Full Screen</button>
    </div>
  );
};
