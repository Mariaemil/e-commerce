import { HttpClient } from '@angular/common/http';
import { Injectable, model } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http:HttpClient) { }

  createNewCart(Model:any) {
    return this.http.get('https://fakestoreapi.com/carts')
  }
}
