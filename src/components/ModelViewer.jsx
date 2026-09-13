import "@google/model-viewer";

function ModelViewer() {
  // its lambo one
  return (
<div className="modelcont">    <model-viewer 
    className="model"
      src="../public/watch3.glb"
      alt="3D Model"
      camera-controls
      disable-zoom
      shadow-intensity="1"
shadow-softness="0.5"
exposure="1"
orientation="00deg 0deg -60deg"
      interaction-prompt="none"
      camera-orbit="0deg 75deg 12m"
      min-camera-orbit="auto 75deg auto"
      max-camera-orbit="auto 75deg auto"
   
    /></div>
  );
}

export default ModelViewer;