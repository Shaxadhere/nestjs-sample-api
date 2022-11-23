import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): {name:string,email:string,age:Number} {
    const me = {
      name:"Shehzad Ahmed",
      email:"shehzad.ahmed@koderlabs.com",
      age:22
    }
    return me;
  }
}
