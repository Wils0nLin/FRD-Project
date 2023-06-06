import { Injectable } from '@nestjs/common';

@Injectable()
export class PublicService {
  register(form: any) {
    console.log('write your register query here', form);
  }

  login(userloginInfo: any) {
    console.log(`compare ${userloginInfo} with query result`);
  }
}
