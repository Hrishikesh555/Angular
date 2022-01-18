import { Component, OnInit } from '@angular/core';
import { Ingrediant } from "../Shared/ingrediants.model";
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingrediants:Ingrediant[]=[
    new Ingrediant('Paner',500),
    new Ingrediant('apple',100),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
