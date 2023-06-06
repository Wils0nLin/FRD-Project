import { Injectable, Post } from '@nestjs/common';

@Injectable()
export class AdminService {
  upLoadProduct(form: any) {
    console.log(
      `uploading product by ${form} to few table"Version,product-tag,platform,product-list"`,
    );
  }
  merchantReg() {
    console.log(`get all merchant registration`);
  }
  merchantConfirm(merchantId: any) {
    console.log(`update merchant statust to an fixed status confirmed by id`);
  }
}
