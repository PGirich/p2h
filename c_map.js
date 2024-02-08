import { CObj, oList, iList, shopList, actList } from './c_obj.js'
export class CMap extends CObj {
  constructor(pname, pcaption, pcomment) {
    super(pname, pcaption, pcomment)
    this.type = 'map'
  }
}
