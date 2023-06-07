import { Injectable } from '@nestjs/common';

@Injectable()
export class ConsumerService {
  displayWishList() {
    console.log(`display wish list`);
  }
  uploadWishList(id: any) {
    console.log(`upload product by id`);
  }
  updateWishList(id: any) {
    console.log(`del product by id`);
  }
  creatOrder(itemID: string) {
    console.log(`upload items to `);
  }
  prePaymentConfirm(paymentStatus: any) {
    console.log(`confirm payment success or not if  change status`);
  }
  remainPaymentConfirm(paymentStatus: any) {
    console.log(`update to payed by case`);
  }
  getQrCodeId(userId: string) {
    console.log('get qrCode id by user id ');
  }
  editProfile(form: any) {
    console.log(`update profile by ${form}`);
  }
  feedback(merchantId: string, feedback: string) {
    console.log(`insert feedback`);
  }
  rating(merchantId: string, rating: number) {
    console.log(`inserting rating by merchantID`);
  }
}
