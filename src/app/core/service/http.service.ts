import { Injectable } from '@angular/core';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';  


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HTTP) { }

 async get<T>(url: String){
    const result = await this.http.get(url);
    return this.readResult<T>(result);
  }

  private readResult<T>(result: HttpResponse){
    if (result && result.data){
      return JSON.parse(result.data) as T;
    }
    
    return null;
  }
}
