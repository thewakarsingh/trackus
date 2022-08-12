import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User} from '../setdata/user'



@Injectable({
  providedIn: 'root'
})

export class SetDataService {

  url='';


  constructor(private http: HttpClient) { }

  public uploadData(user: User){

    this.http.post<any>(this.url,user);

  }
}
