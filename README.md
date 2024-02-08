# p2h

objList - список метаданных

Слой представления
панели - отображают тематический интерфейс
для разных объектов есть общие методы для отображения их в разных панелях

Слой бизнес-логики
процессинг объектов, проверка доступности новых объектов
процессинг по своей сути одинаков для всех объектов - общий + активные задачи
статические объекты: знания, имущество. доступные задачи, доступное имущество

    ОБЪЕКТ      ПРОЦЕССИНГ        АКТИВАЦИЯ
    выносливость уставание        восстановление
    энергия     восполнение       фокус/отмена
    знания      забывание         изучение/стоп
    имущество   ветшание          надеть/снять
    задача      выполнение        старт/стоп
    техника     выполнение        применение/отмена
    миссия      выполненте        старт/стоп
    препятствие преодоление       вызов/отмена

    миссия - враг - книга - знание - техника - задача - титул

задачи связанные с другими объектами: покупка имущества, изучение знаний, запуск задач, каст заклюинаний и др

- гипотеза: имущество, знания, заклинания - имеют только одну задачу: купить, изучить, скастовать
- анлок не является задачей!

механизм наследования метаданных объектов - облегчение их определения: Переписывание свитков -> рецензирование свитков (опыт х 1.2, доход х 2)

МЕТОДЫ ОБЪЕКТА
draw(mode) mode: menu, shop, actlist, map, battle, tooltip // html отрисовка
unlock(shop), lock(shop), buy(shop), sell(shop)
shop: map, loot, insight, sect, market, gift // получить/ потерять
toggle(onOff) // старт/стоп
process(ticCount) // процессинг применения
done(ticCount) // итоговый результат

МЕТОДЫ ОПИСАНИЯ МЕТАДАННЫХ
oCrea(type, name, caption, comment) // создать объект данного типа
оClone(src, name, caption, comment) // создать копию объекта

НАЧАЛО

export const omlist = []; // метаданные объектов
export const olist = []; // метаданные объектов

// создание метаданных объекта
export function oCrea(ptype, pname, pcaption, pcomment) {
let result = {type : ptype, name : pname, caption : pcaption, comment : pcomment};
omlist[pname] = result;
return result;
}

// копирование метаданных объекта (вложенные структуры общие - менять целиком)
export function oClone(psrc, pname, pcaption, pcomment) {
let result = {};
Object.assign(result, omList[psrc]);
omlist[pname] = result;
return result;
}

// помещает в магазин ссылку на метаданные объекта
export function unlock(pname, pshop) {
let om = omList[pname];
let shop = omList[pshop];
if (!oList[om.type]) !oList[om.type] = [];
!oList[om.type].push(om); 
return om;
}

let result = {type : ptype, name : pname, m : om};
Object.assign(result, omList[psrc]);
omlist[pname] = result;
return result;
}


// моя деревня на карте
oCrea('map', 'map_village', 'Small village', 'Small village, in the far edge of the world');
oCrea('shop','shop_places', 'Available places', 'You know, how to get there');
unlock('map_village', 'shop_places');

Слой хранения

=======================================================
====== АРТЕФАКТЫ

- изначально не доступны, требуют разблокировки
- имеют метаданные и текущее состояние,
  которое меняется со временем (в основном за счет действий)
-

action - действие, инициируемое пользователем, изменяет все подряд
группы: instant, process, buy, create, spellcast

resource - имущество, ограничено объемом склада
группы:
estate - недвижимость, ограничено известностью и отношением
furniture - имущество, занимающее место в доме, ограничено площадью дома
item - имущество, ограничено объемом склада
wearable - одежда, оружие

energy - восполняемая энергия, ресурс для действий
группы: vital, mana,

knowledge - знания
группы:
lore - история
locale - местности, подземелья, карманные измерения
dao - понимание сути вещей
spell - навыки заклинаний, боевых искусств
technic - техники развития

=======================================================
====== МЕТА ХАРАКТЕРИСТИКИ АРТЕФАКТОВ
type: "action", // type
name: "begging", // id
caption: "begging", // display text
comment: "begging passersby for money", // tooltip text
group: "process", // group  
 subgroup: "", // subgroup
level: "earth", // level
hidden: false, // to hide from user
unlockCond: [{prop:'filth',op:`<`,val:1}],// unlock conditions
enableCond: [], // access conditions
ticResult: [{prop:'stamina',cost:0.3}], // tic effects
actionTime: 8, // time length in tics
actionResult: [{prop:'gold',cost:0.01}], // end effects
actionResUnlock: "action.begging", // action unlock features

=======================================================
====== ХАРАКТЕРИСТИКИ АРТЕФАКТОВ
unlock: false, //
access: false,
active: false,  
 useCount: 0,
ticCount: 0,
skill: 0,
skillMax: 0,

=======================================================
====== event loop
для всех активных
проверить активность объекта
изменить ресурсы
проверить на завершение
изменить ресурсы
были изменения?  
 для связанных с изм.ресурсов объектов
проверить на разблокирование/ заблокирование связанные объекты
