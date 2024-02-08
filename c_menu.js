import { CObj, oList, iList, shopList } from './c_obj.js'
export class CMenu extends CObj {
  listType
  constructor(pname, pcaption, pcomment, ltype) {
    super(pname, pcaption, pcomment)
    this.type = 'menu'
    this.listType = ltype
  }
  //отрисовка объекта
  render() {
    const $el = document.createElement('div')
    $el.appendChild(this.renderHeader())
    $el.appendChild(this.renderList())
    return $el
  }
  // отрисовка шапки
  renderHeader() {
    const $el = document.createElement('div', {
      class: this.type,
      id: this.name,
      title: this.comment,
    })
    $el.textContent = this.caption
    return $el
  }
  // отрисовка списка
  renderList() {
    const $li = document.createElement('div')
    return $li
  }
}
export class CMenuShop extends CMenu {
  // отрисовка списка
  renderList() {
    const $li = document.createElement('div')
    console.log(shopList)
    console.log(this.listType)
    if (shopList[this.listType]) {
      shopList[this.listType].forEach((el) => {
        const obj = el.o
        if (obj.unlocked) {
          $li.appendChild(el.o.render())
        }
      })
    }
    return $li
  }
}
export class CMenuAction extends CMenu {
  // отрисовка списка
  renderList() {
    const $li = document.createElement('div')
    shopList[this.listType].forEach((el) => {
      const obj = el.o
      if (obj.owned) {
        $li.appendChild(el.o.render())
      }
    })
    return $li
  }
}
