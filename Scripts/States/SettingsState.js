import { visualNovelEngine } from "../VNInitialScript.js";

    let settingsState = document.createElement("div");

    let container = document.createElement("div");
    let tableContainer = document.createElement("div");
    let title = document.createElement("h1");
    let btnBack = document.createElement("button");
    let table = document.createElement("table");

    settingsState.id = "settingsState";

    container.className = "stateContent";

    tableContainer.id = "settings";

    title.id = "settingsTitle";
    title.innerHTML = "Settings";

    btnBack.id = "settingsBack";
    btnBack.className = "gameButton";
    btnBack.type = "button";
    btnBack.innerHTML = "Back";

    table.id = "settingsTable";

    let headers = [];
    headers.length = 4;

    headers[0] = createTableHeader("column1", "Volume");
    headers[1] = createTableHeader("column2", "");
    headers[2] = createTableHeader("column3", "");
    headers[3] = createTableHeader("column4", "Mute");

    let tableDataRow1 = [];
    tableDataRow1.length = 3;

    tableDataRow1[0] = createTableDataCell("column1", ["label", null, null, "Master Volume"]);
    tableDataRow1[1] = createTableDataCell("column2", ["span", null, "settingsMasterVolume", "50"]);
    tableDataRow1[2] = createTableDataCell("column3", ["input", "volumeSlider", "settingsMasterVolumeSlider", null, "range", "0", "100", "50"]);

    let tableDataRow2 = [];
    tableDataRow2.length = 4;

    tableDataRow2[0] = createTableDataCell("column1", ["label", null, null, "Music Volume"]);
    tableDataRow2[1] = createTableDataCell("column2", ["span", null, "settingsMusicrVolume", "50"]);
    tableDataRow2[2] = createTableDataCell("column3", ["input", "volumeSlider", "settingsMusicVolumeSlider", null, "range", "0", "100", "50"]);
    tableDataRow2[3] = createTableDataCell("column4", ["input", "muteBox", "settingsMusicVolumeMuteBox", null, "checkbox"]);

    let tableDataRow3 = [];
    tableDataRow3.length = 4;

    tableDataRow3[0] = createTableDataCell("column1", ["label", null, null, "Sound Effects Volume"]);
    tableDataRow3[1] = createTableDataCell("column2", ["span", null, "settingsSoundEffectsVolume", "50"]);
    tableDataRow3[2] = createTableDataCell("column3", ["input", "volumeSlider", "settingsSoundEffectsVolumeSlider", null, "range", "0", "100", "75"]);
    tableDataRow3[3] = createTableDataCell("column4", ["input", "muteBox", "settingsSoundEffectsVolumeMuteBox", null, "checkbox"]);

    let tableDataRow4 = [];
    tableDataRow4.length = 4;

    tableDataRow4[0] = createTableDataCell("column1", ["label", null, null, "Character Voice Volume"]);
    tableDataRow4[1] = createTableDataCell("column2", ["span", null, "settingscharacterVoiceVolume", "50"]);
    tableDataRow4[2] = createTableDataCell("column3", ["input", "volumeSlider", "settingsCharacterVoiceVolumeSlider", null, "range", "0", "100", "75"]);
    tableDataRow4[3] = createTableDataCell("column4", ["input", "muteBox", "settingsCharacterVoiceVolumeMuteBox", null, "checkbox"]);


    function createTableRow(contents){

        let tableRow = document.createElement("tr");

        for(let i = 0; i < contents.length; i++){

            tableRow.appendChild(contents[i]);

        }

        return tableRow;

    }

    function createTableHeader(className, text){

        let tableHeader = document.createElement("th");

        tableHeader.className = className;
        tableHeader.innerHTML = text;

        return tableHeader;

    }
    
    function createTableDataCell(className, contents){

        let tableDataCell = document.createElement("td");
        tableDataCell.className = className;

        let element;

        for(let i = 0; i < contents.length; i++){

            switch(i){

                case(0):

                if(contents[i] == null){

                    continue;

                }
                
                element = document.createElement(contents[i]);

                break;

                case(1):

                if(contents[i] == null){

                    continue;

                }
                
                element.className = contents[i];

                break;

                case(2):

                if(contents[i] == null){

                    continue;

                }

                element.id = contents[i];

                break;

                case(3):

                if(contents[i] == null){

                    continue;

                }

                element.innerHTML = contents[i];

                break;

                case(4):

                if(contents[i] == null){

                    continue;

                }

                element.type = contents[i];

                break;

                case(5):

                if(contents[i] == null){

                    continue;

                }

                element.min = contents[i];

                break;

                case(6):

                if(contents[i] == null){

                    continue;

                }

                element.max = contents[i];

                break;

                case(7):

                if(contents[i] == null){

                    continue;

                }

                element.value = contents[i];

                break;

            }

        }

        tableDataCell.appendChild(element);

        return tableDataCell;

    }

    table.appendChild(createTableRow(headers));
    table.appendChild(createTableRow(tableDataRow1));
    table.appendChild(createTableRow(tableDataRow2));
    table.appendChild(createTableRow(tableDataRow3));
    table.appendChild(createTableRow(tableDataRow4));

    tableContainer.appendChild(table);

    container.appendChild(title);
    container.appendChild(document.createElement("br"));
    container.appendChild(btnBack);
    container.appendChild(tableContainer);

    settingsState.appendChild(container);
    
    let stateManager = visualNovelEngine.getHandler().getStateManager()
    stateManager.addState("settingsState", settingsState, false);
    stateManager.addStateButton("settingsState", "settingsBackBtn", btnBack);
    visualNovelEngine.attachScriptPhase1();

