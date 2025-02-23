import { Component, EventEmitter, Input, input, OnInit, Output, output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  @Input() data!:Product
  @Output() item = new EventEmitter();
  addButton:boolean = false;
  amount:number = 0
  constructor() { }
  
  ngOnInit(): void {
  }
  add() {
    this.item.emit({item:this.data ,quantity:this.amount })
  }
}
