import { Body, Injectable } from '@nestjs/common';

@Injectable()
export class MerchantService {
  editProfile(form: any) {
    console.log(`update ${form} to merchant profile`);
  }
  upLoadItems(form: any) {
    console.log(`post item by body`);
  }
  updateItems(form: any) {
    console.log(`update item by body`);
  }

  changeItemStatus(form: any) {
    console.log(`update item status `);
  }
  pairUserId(consumerid: string) {
    console.log(
      `find items by user id which is generate by code and published day`,
    );
  }
  paymentConfirm(result: any) {
    console.log(`change order status by ${result}`);
  }
}
