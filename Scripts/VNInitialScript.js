import { VisualNovelEngine } from "./EngineManager.js";

function addScript(src, isModule) {

    let scriptHolder = document.getElementById("VNScripts");
    let script = document.createElement("script");
    script.defer = true;

    if(typeof isModule == "boolean"){

        if(isModule){

            script.type = "module";

        }

    }

    script.src = src;
    scriptHolder.appendChild(script);

}

export var visualNovelEngine;

const btnStartEngine = document.getElementById("coverButton");

btnStartEngine.onclick = () => {

    //System
    addScript("Scripts/EngineManager.js", true);
    visualNovelEngine = new VisualNovelEngine("VNMainFrame");
    visualNovelEngine.initialize();
    
}

