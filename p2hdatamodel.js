
// main character
export const hero = {
  actions : []
}

//
class Action {
  constructor(actionType) {
      this.type = actionType;
      this.actionListEntry = actionsList.findIndex()
      this.ena = true;
      this.vis = true;
      this.width = width;
  }
}

// Add action to hero
export function addAction(actionName) {
  const actionListEntry = actionsList.find(element => element.name === actionName)
  hero.actions.push(actionListEntry)
  hero[actionName].ena = actionListEntry.IsEna
}

// Apply cost to hero
// cost format:  [{prop:'hero object property name', val:`cost to subtract`},...]
export function applyResult(arrPropCost) {
  arrPropCost.forEach(propCost => {hero[propCost.prop]-=propCost.val})
}

// Check condition fulfillment
// condition format:  [{prop:'hero object property name',op=`< > =`, val:`value to check`},...]
export function checkCondition(arrPropOpVal) {
  let result = (arrPropOpVal===undefined)||(arrPropOpVal.length===0)
  if (!result) {
      arrPropOpVal.forEach(propOpVal => {
          result &&= eval(propOpVal`hero.${propOpVal.prop}${propOpVal.op}${propOpVal.val}`)
      })
  }
  return result
}

// ====================================================
// full list of all actions
export const actionsList = []
export function loadActionsList() {
  actionsList.push({
      name: "begging",
      caption: "begging",
      comment: "begging passersby for money",
      addCond: [],
      enableCond: [],
      ticResult: [
          {prop:'stamina',cost:0.3}
      ],
      actionTime: 8,
      actionResult: [
          {prop:'gold',cost:0.01}
      ]
  })
  actionsList.push({
      name: "learning_reading",
      caption: "learning reading",
      comment: "learning how to read with old teacher",
      addCond: [],
      enableCond: [
          {prop:'filth',op:`<`, val:1}
      ],
      ticResult: [
          {prop:'stamina',cost:0.3}
      ],
      actionTime: 200,
      actionResult: [
          {prop:'scholar',cost:0.01},
          {prop:'scholar',cost:0.01}
      ]
  })
  console.log(actionsList)
}