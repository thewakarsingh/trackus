export class User {

    constructor(
      public name:string,
      public email:string,
      public password:string
      ){}
        
  }


  export interface LocationInfo {
    lat : number,
    log:number,
    point: Number
  }

  export interface line {
    lat : number,
    log:number,
    point: Number
  }