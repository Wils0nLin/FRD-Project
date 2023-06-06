import { Body, Injectable } from '@nestjs/common';

@Injectable()
export class MerchantService {
  editProfile(form: any) {
    console.log(`update ${form} to merchant profile`);
  }
  upLoadItems(form: any) {
    console.log(`post item by body`, form);
  }
  updateItems(form: any) {
    console.log(
      `update item by body and also running query to get all values with all consumer in wish list sees is there have matches of consumer wishes`,
      form,
    );
  }
  changeItemStatus(form: any) {
    console.log(`update item status `, form);
  }
  pairUserId(consumerid: string) {
    console.log(
      `find items by user id which is generate by code and published day`, consumerid
    );
  }
  paymentConfirm(result: any) {
    console.log(`change order status by ${result}`);
  }
}
