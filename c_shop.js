import { CObj, oList, iList, shopList, actList } from './c_obj.js'
export class CShop extends CObj {
  location
  constructor(pname, pcaption, pcomment, plocation) {
    super(pname, pcaption, pcomment)
    this.type = 'shop'
    this.location = plocation
  }
}
