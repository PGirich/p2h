// Import stylesheets
import './index.css';

// Import modules
import { loadActionsList, actionsList, hero } from './p2hdatamodel.js';

const $panelStat = document.getElementById('panelStat');
console.log($panelStat);
loadActionsList();
showActions(); 

function showActions() {
  let htmlCode = `actions <br>`;
  actionsList.forEach((action) => {
    const btId = `action.${action.name}`;
    if (!($panelStat === null)) {
      console.log(btId);
    }
    var $btAction = document.getElementById(btId);
    if ($btAction === null) {
      $btAction = document.createElement('button');
      $btAction.id = btId;
      $btAction.className = "actionButton";
      $btAction.style.className = "actionButton";
      $btAction.setAttribute('data-tooltip', action.comment);

      $btAction.onmouseover = (e) => {
        showHint(e, btId);
      };
      $btAction.onmouseout = (e) => {
        hideHint(e, btId);
      };
      $btAction.textContent = action.caption;
      $panelStat.appendChild($btAction);
      $btAction.style.visibility = true;
    }
  });
  //panelStat.innerHTML = htmlCode
  console.log(`show actions ` + htmlCode);
}

console.log(`hello world`);

// martial artist
const artist = {
  name: '',
  isLive: true,
};

// main character

const action = {
  name: `action name`,
  //    doAction() {console.log(`error: abstract do action`)},
  enabled: false,
  //    checkEnabled() {enabled = false}
};

const fillBar = {
  name: `ki name`,
};

const fillBarAction = {
  name: `feel ki`,
};

/* hint mechanic */
export function showHint(e, controlName) {
  const $control = document.getElementById(controlName);
  const $tooltip = document.getElementById('tooltip');
  $tooltip.top = e.pageY + 5;
  $tooltip.left = e.pageX + 5;
  $tooltip.innerText = $control.getAttribute('data-tooltip');
  $tooltip.style.visibility = true;
  console.log(`show tooltip`);
}
export function hideHint(e, controlName) {
  const $control = document.getElementById(controlName);
  const $tooltip = document.getElementById('tooltip');
  $tooltip.top = 0;
  $tooltip.left = 0;
  $tooltip.style.visibility = false;
  console.log(`hide tooltip`);
}
