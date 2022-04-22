
 import {loadActionsList, actionsList, hero} from "./p2hdatamodel.js";

 const $panelStat = document.getElementById("panelStat");

 loadActionsList();
 showActions();

 function showActions() {
     let htmlCode = `actions <br>`;
     actionsList.forEach(action => {
         const btId = "action.${action.name}";
         const $btAction = $panelStat.getElementByID(btId);
         if (btAction === null) {
           btAction = $panelStat.createElement("button");
           btAction.id = "action.${action.name}";
           btAction.class = "actionButton";
           btAction.data-tooltip = "${action.comment}";

           btAction.onmouseover = ()=>{showHint(e,'${action.name}')};
           btAction.onmouseout = ()=>{hideHint(e,'${action.name}')};
           btAction.caption = action.caption;
         }

     });
     //panelStat.innerHTML = htmlCode
     console.log(`show actions `+htmlCode);
 }

 console.log(`hello world`)
// document.write("<h1>hello world"+1);
// document.write("<h1>grandpa! "+2);
// document.write("<h2>mouse! "+(2*2+3-5));
// document.write("<h3>dog! "+(2*2+3-4));
// document.write("<h421:23 08.12.2019>bird! "+(2*2+3-3));
// document.write("<br>grandma");

// martial artist
const artist = {
    name: '',
    isLive: true
}

// main character



const action = {
    name : `action name`,
//    doAction() {console.log(`error: abstract do action`)},
    enabled : false,
//    checkEnabled() {enabled = false}
}

const fillBar = {
    name: `ki name`


}

const fillBarAction = {
    name: `feel ki`
}


/* hint mechanic */
export function showHint (e,controlName) {
    const control = Document.getElementByID('controlName')
    const tooltip = Document.getElementByID('tooltip')
    tooltip.top = e.pageY + 5
    tooltip.left = e.pageX + 5
    tooltip.innerText = control.data-tooltip
    tooltip.show()
    console.log(`show tooltip`)
}
 export function hideHint (e,controlName) {
     const control = Document.getElementByID('controlName')
     const tooltip = Document.getElementByID('tooltip')
     tooltip.top = 0
     tooltip.left = 0
     tooltip.hide()
     console.log(`hide tooltip`)
 }