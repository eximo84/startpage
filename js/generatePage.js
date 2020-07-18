function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

function UpdateSearchEngine() {
    if(isEmptyOrSpaces(pageOptions.searchEngineURL)) {
        return;
    } 
    
    var formTag = document.querySelector("form");
    formTag.action = pageOptions.searchEngineURL;
}

function GenerateChildLinks(childLink) {
    if(isEmptyOrSpaces(childLink.DisplayName)) {
        return null;
    }
    
    var aTag = document.createElement("a");
    aTag.href = childLink.Link;
    
    if(pageOptions.openLinksInSameTab) {
        aTag.setAttribute('target', '_self');
    } else {
        aTag.setAttribute('target', '_blank');
    }
    
    var divWrapperTag = document.createElement("div");
    divWrapperTag.classList.add("item");
    
    var imgTag = document.createElement("img");
    imgTag.src = childLink.Image;
    
    var divTextTag = document.createElement("div");
    divTextTag.classList.add("subtext");

    var headerTextTag = document.createElement("h3");
    headerTextTag.innerText = childLink.DisplayName;
    
    divTextTag.appendChild(headerTextTag);
    divWrapperTag.appendChild(imgTag);
    divWrapperTag.appendChild(divTextTag);
    aTag.appendChild(divWrapperTag);
    
    return aTag;
}

function GenerateContainer(elm) {
    var divColumnContainer = document.createElement("div");
    divColumnContainer.classList.add("container");
    
    var divSectionHeader = document.createElement("div");
    divSectionHeader.classList.add("section_header");
    
    var headerOuterTag = document.createElement("h2");
    
    var headerIcon = document.createElement("i");
    //headerIcon.classList.add(elm.SymbolPrefix);
    headerIcon.className = elm.SymbolPrefix;
    
    var headerText = document.createElement("span");
    headerText.innerText = elm.ContainerName;
    
    headerOuterTag.appendChild(headerIcon);
    headerOuterTag.appendChild(headerText);
    divSectionHeader.appendChild(headerOuterTag);

    divColumnContainer.appendChild(divSectionHeader);
    
    for(var jj = 0; jj < elm.ChildLinks.length; jj++) {
        var subItem = elm.ChildLinks[jj];
        var output = GenerateChildLinks(subItem);
        if(output) {
            divColumnContainer.appendChild(output);
        }
    }
    
    var mainPage = document.querySelector(".container_master");
    mainPage.appendChild(divColumnContainer);
}


function __Main__() {
    // Iterate over the data variable in pageData.js to generate our columns
    for(var jj = 0; jj < data.length; jj++) {
        GenerateContainer(data[jj]);
    }
    
    // Update the search engine URL based on the value in pageOptions.searchEngineURL
    UpdateSearchEngine();
}

__Main__();