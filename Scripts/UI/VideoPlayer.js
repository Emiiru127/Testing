import { visualNovelEngine } from "../VNInitialScript.js";

{

    let videoPlayerUI = document.createElement("div");
    videoPlayerUI.className = "UI";
    videoPlayerUI.id = "videoPlayerUI";
    
    let videoPlayerUIContainer = document.createElement("div");
    videoPlayerUIContainer.className = "UI";
    videoPlayerUIContainer.id = "videoPlayerUIContainer";
    
    let videoPlayer = document.createElement("video");
    videoPlayer.id = "videoPlayer";
    videoPlayer.controls = false;
    videoPlayer.src = "Assets/Videos/sample.mp4";
    videoPlayer.loop = true;
    videoPlayer.disablePictureInPicture = true;
 
    videoPlayerUIContainer.appendChild(videoPlayer);
    
    videoPlayerUI.appendChild(videoPlayerUIContainer);
    
    let uiManager = visualNovelEngine.getHandler().getUIManager();
    uiManager.addUI("videoPlayerUI", videoPlayerUI);
    uiManager.addUI("videoPlayer", videoPlayer);
    
    visualNovelEngine.attachScriptPhase2();

}