import { Injectable } from '@nestjs/common';

@Injectable()
export class PublicService {
  register(form: any) {
    console.log('write your register query here', form);
  }

  login(userloginInfo: any) {
    console.log(`compare ${userloginInfo} with query result`);
  }
  //Homepage
  hot() {
    console.log(`arrange by views`);
  }
  comingSoon() {
    console.log(`select products by a desc of time `);
  }
  displayTag() {
    console.log(`display Tag filter in Homepage`);
  }
  displayPlatform() {
    console.log(`display platform filter in Homepage`);
  }
  // search engine
  platformFilter(platform: Array<string>) {
    console.log('using query to get all value which is NOT repeat', platform);
  }

  tagFilter(tag: Array<string>) {
    console.log('using query to get all value which is NOT repeat', tag);
  }
  search(string: Array<string>) {
    console.log(
      'using query to get all value which is NOT repeat and remember to split with bank',
      string,
    );
  }
  version(productid: any, versionId: any) {
    console.log(`select all iems with props`, productid, versionId);
  }
  district(productid: any, versionId: any, district: any) {
    console.log(`select all iems with props`, productid, versionId, district);
  }
  area(productid: any, versionId: any, area: any) {
    console.log(`select all iems with props`, productid, versionId, area);
  }
  priceDesc(productid: any, versionId: any) {
    console.log(`set price desc`, productid, versionId);
  }
  priceAsec(productid: any, versionId: any) {
    console.log(`set price asec`, productid, versionId);
  }
  rating(productid: any, versionId: any) {
    console.log(`set rating asce`, productid, versionId);
  }
  searchItem(productid: any, versionId: any, string: Array<string>) {
    console.log(
      'using query to get all value which is NOT repeat and remember to split with bank',
      productid,
      versionId,
      string,
    );
  }
  //Homepage tag

  //order display
  displayOrder(JWTpayload: any): void {
    console.log(`display order by userId`, JWTpayload);
  }
  displayOrderHistory(JWTpayload: any): void {
    console.log(`display order history by userId`, JWTpayload);
  }
  //
}
