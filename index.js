// Import modules
import { oList, iList, shopList } from './c_obj.js'
import { loadMetaData } from './p2hdatamodel.js'

// загрузим метаданные
loadMetaData()
console.log('shopList:', shopList)
console.log('oList:', oList)
console.log('iList:', iList)
//
const $panelStat = document.getElementById('panelStat')

//
const $panelGeneral = document.getElementById('panelGeneral')
if (oList['menu_chart'].unlocked) {
  $panelGeneral.appendChild(oList['menu_chart'].render())
}

/*
showActions()

function showActions() {
  let htmlCode = `actions <br>`
  actionsList.forEach((action) => {
    const btId = `action.${action.name}`
    if (!($panelStat === null)) {
      console.log(btId)
    }
    var $btAction = document.getElementById(btId)
    if ($btAction === null) {
      $btAction = document.createElement('button')
      $btAction.id = btId
      $btAction.className = 'actionButton'
      $btAction.style.className = 'actionButton'
      $btAction.setAttribute('data-tooltip', action.comment)

      $btAction.onmouseover = (e) => showHint(e)
      $btAction.onmouseout = (e) => hideHint(e)
      $btAction.textContent = action.caption
      $panelStat.appendChild($btAction)
      $btAction.style.visibility = true
    }
  })
}
*/

//===================================
/* hint mechanic */

// get absolute position of element
function GetScreenCordinates(obj) {
  const rect = obj.getBoundingClientRect()
  return {
    x: rect.left + window.scrollX,
    y: rect.top + window.scrollY,
  }
}

// show hint
export function showHint(e) {
  const $control = e.target
  const $tooltip = document.getElementById('tooltip')
  const pos = GetScreenCordinates($control)
  $tooltip.innerHTML = `<div><font color="blue">${controlName}</font>:</div><hr/><div>${$control.dataset.tooltip}</div><hr/>Hello!!!`
  $tooltip.style.top = pos.y + $control.offsetHeight + 5 + 'px'
  $tooltip.style.left = pos.x + 5 + 'px'
  $tooltip.style.display = 'block'
  console.log(`show tooltip`)
}

// hide hint
export function hideHint(e, controlName) {
  const $tooltip = document.getElementById('tooltip')
  $tooltip.style.display = 'none'
  $tooltip.top = 0
  $tooltip.left = 0
  $tooltip.innerText = ''
  console.log(`hide tooltip`)
}
