# p2h


  objList - список метаданных
  


=======================================================
====== АРТЕФАКТЫ
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
  name:     "begging",                      // id
  type:     "action",                       // type
  group:    "process",                      // group   
  subgroup: "",                             // subgroup
  level:    "earth",                        // level
  hidden:   false,                          // to hide from user
  caption:  "begging",                      // display text
  comment:  "begging passersby for money",  // tooltip text
  unlockCond: [{prop:'filth',op:`<`,val:1}],// unlock conditions
  enableCond: [],                           // access conditions
  ticResult:  [{prop:'stamina',cost:0.3}],  // tic effects
  actionTime: 8,                            // time length in tics
  actionResult: [{prop:'gold',cost:0.01}],  // end effects

=======================================================
====== ХАРАКТЕРИСТИКИ АРТЕФАКТОВ
  unlock:   false,                           // 
  access:   false,
  active:   false,    
  useCount: 0,
  ticCount: 0,
  skill:    0,
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






















