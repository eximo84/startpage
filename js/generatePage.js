function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

function UpdateSearchEngine() {
    if(isEmptyOrSpaces(pageOptions.searchEngineURL)) {
        return;
    } 
    
    let formTag = document.querySelector("form");
    formTag.action = pageOptions.searchEngineURL;
}

function GenerateChildLinks(childLink) {
    if(isEmptyOrSpaces(childLink.DisplayName)) {
        return null;
    }
    
    let aTag = document.createElement("a");
    aTag.href = childLink.Link;
    
    if(pageOptions.openLinksInSameTab) {
        aTag.setAttribute('target', '_self');
    } else {
        aTag.setAttribute('target', '_blank');
    }
    
    let divWrapperTag = document.createElement("div");
    divWrapperTag.classList.add("item");
    
    let imgTag = document.createElement("img");
    imgTag.src = childLink.Image;
    
    let divTextTag = document.createElement("div");
    divTextTag.classList.add("subtext");

    let headerTextTag = document.createElement("h3");
    headerTextTag.innerText = childLink.DisplayName;
    
    divTextTag.appendChild(headerTextTag);
    divWrapperTag.appendChild(imgTag);
    divWrapperTag.appendChild(divTextTag);
    aTag.appendChild(divWrapperTag);
    
    return aTag;
}

function GenerateContainer(elm) {
    let divColumnContainer = document.createElement("div");
    divColumnContainer.classList.add("container");
    
    let divSectionHeader = document.createElement("div");
    divSectionHeader.classList.add("section_header");
    
    let headerOuterTag = document.createElement("h2");
    
    let headerIcon = document.createElement("i");
    headerIcon.className = elm.SymbolPrefix;
    
    let headerText = document.createElement("span");
    headerText.innerText = elm.ContainerName;
    
    headerOuterTag.appendChild(headerIcon);
    headerOuterTag.appendChild(headerText);
    divSectionHeader.appendChild(headerOuterTag);

    divColumnContainer.appendChild(divSectionHeader);
    
    for(var jj = 0; jj < elm.ChildLinks.length; jj++) {
        let subItem = elm.ChildLinks[jj];
        let output = GenerateChildLinks(subItem);
        if(output) {
            divColumnContainer.appendChild(output);
        }
    }
    
    let mainPage = document.querySelector(".container_master");
    mainPage.appendChild(divColumnContainer);
}

function RemoveDefaultPageMessage() {
    let defaultMsg = document.querySelector("#defaultMessage");
    if(defaultMsg) {
        defaultMsg.remove();
    }
}

// Get current time and format
function getTime() {
    let date = new Date(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds();
          
    let result = "" +
                (hour < 10 ? ("0" + hour) : hour) + ":" +
                (min < 10 ? ("0" + min) : min);
    if(pageOptions.displaySeconds) {
        result += ":" + (sec < 10 ? ("0" + sec) : sec);
    } 
    
    return result;
}

function getDate() {
    let date = new Date(),
            months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            cmonth = months[date.getMonth()],
            days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            cday = days[date.getDay()],
            cnum = date.getDate();
    return "" + cday + " " + cnum + " " + cmonth;
}

function SetTimeDisplay() {
    // Set up the clock and date
    document.getElementById("clock").innerHTML = getTime();
    document.getElementById("date").innerHTML = getDate();

    // Set clock interval to tick clock
    setInterval(() => {
            document.getElementById("clock").innerHTML = getTime();
    }, 1000);
    setInterval(() => {
            document.getElementById("date").innerHTML = getDate();
    }, 100000);
}

function RandomizeBackgroundImage(min, max, extension) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    let result = './backgrounds/' + randomNumber + extension;
}

function SetBackground() {
    let opts = pageOptions.background;
    
    let img = "";
    if(opts.randomize) {
        img = RandomizeBackgroundImage(opts.minFileName, opts.maxFileName, opts.extension);
    } else {
        img = opts.staticBackground;
    }
    
    document.body.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(' + img + ')';    
}

function __Main__() {
    // Set up the clock and date
    SetTimeDisplay();
    
    // Set the background image
    SetBackground();
    
    // Remove the default placeholder message
    RemoveDefaultPageMessage();
    
    // Iterate over the data variable in pageData.js to generate our columns
    for(var jj = 0; jj < data.length; jj++) {
        GenerateContainer(data[jj]);
    }
    
    // Update the search engine URL based on the value in pageOptions.searchEngineURL
    UpdateSearchEngine();
    

}

__Main__();