import { CObj, oList, iList, shopList, actList } from './c_obj.js'
export class CAction extends CObj {
  // мета
  resTic = [] // изменения от действия в секунду
  ticSucess = false // признак успешности в секунду
  actionLength = 1 // длительность действия в секундах
  // выполнение
  actionProgress // прогресс действия в секундах

  constructor(pname, pcaption, pcomment) {
    super(pname, pcaption, pcomment)
    this.type = 'action'
  }
  inAction() {
    return actList.findIndex(this) !== -1
  }
  begin() {
    if (!this.inAction()) {
      actList.push(this)
      this.actionProgress = 0
    }
  }
  end() {
    const i = actList.findIndex(this)
    if (i !== -1) {
      actList.slice(i, 1)
    }
  }
}

//

// Add action to hero
export function addAction(actionName) {
  const actionListEntry = actionsList.find(
    (element) => element.name === actionName
  )
  hero.actions.push(actionListEntry)
  hero[actionName].ena = actionListEntry.IsEna
}

// Apply cost to hero
// cost format:  [{prop:'hero object property name', val:`cost to subtract`},...]
export function applyResult(arrPropCost) {
  arrPropCost.forEach((propCost) => {
    hero[propCost.prop] -= propCost.val
  })
}

// Check condition fulfillment
// condition format:  [{prop:'hero object property name',op=`< > =`, val:`value to check`},...]
export function checkCondition(arrPropOpVal) {
  let result = arrPropOpVal === undefined || arrPropOpVal.length === 0
  if (!result) {
    arrPropOpVal.forEach((propOpVal) => {
      result &&= eval(
        propOpVal`hero.${propOpVal.prop}${propOpVal.op}${propOpVal.val}`
      )
    })
  }
  return result
}
