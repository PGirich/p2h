export class CObj {
  type // тип объекта: shop - магазин, map - карта локаций, loot - поле боя,
  //              insight - озарение персонажа, sect - хранилище секты,
  //              market - черный рынок, gift - подарок
  name // код объекта
  caption // заголовок
  comment // описание
  countable = false // количество
  condBuy = [] // условия покупки
  condUse = [] // условия доступности
  resUse = [] // результаты действия

  unlocked = false // разблокирован
  owned = false // куплен

  // объект помещается в массив метаданных
  constructor(pname, pcaption, pcomment) {
    this.name = pname
    this.caption = pcaption
    this.comment = pcomment
    oList[this.name] = this
  }

  // разблокировать и на прилавок в магазин
  unlock(pshop, pcnt = 1) {
    // нет прилавка - создадим
    if (!shopList[pshop]) shopList[pshop] = []
    // нет товара - поместим
    if (!shopList[pshop][this.name]) {
      shopList[pshop][this.name] = { o: this, cnt: pcnt }
      // если применимо - увеличим количество товара
    } else {
      if (this.countable) {
        shopList[pshop][this.name].cnt += pcnt
      }
    }
    this.unlocked = true
    return this
  }
  // убрать с прилавка магазина
  lock(pshop) {
    delete shopList[pshop][this.name]
  }
  // купить
  buy(pshop, pcnt = 1) {
    // проверяем наличие товара
    item = shopList[pshop][this.name]
    if (!shopList[pshop] || !item) return false
    // проверяем достаточность количества
    const c = shopList[pshop][this.name].cnt
    if (item.cnt < pcnt) {
      return false
    }
    // уменьшаем на прилавке
    shopList[pshop][this.name].cnt -= pcnt
    // нет товара - поместим
    if (!iList[this.type][this.name]) {
      iList[this.type][this.name] = pcnt
      owned = true
    } else {
      iList[this.type][this.name] += pcnt
    }
    return true
  }
  sell(pshop, pcnt = 1) {}

  //отрисовка объекта
  render() {
    // количество
    const cnt = ''
    if (this.countable) {
      cnt = ' : ' + iList[this.type][this.name]
    }
    // отрисовка
    const $el = document.createElement(
      `<div class="${this.type}" id="${this.name}" title="${this.comment}">${
        this.caption + cnt
      }</div>`
    )
    // 

    return $el
  }

}

export const oList = [] // список (метаданные) объектов
export const iList = [] // количество объектов: по видам
export const shopList = [] // доступные для покупки объекты: по магазинам
export const actList = [] // список выполняемых действий
