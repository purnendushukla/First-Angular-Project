import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
	// @ViewChild('inputName') ingName : ElementRef;
	// @ViewChild('inputAmount') ingAmount : ElementRef;

  inputName = "";
  inputAmount = "";
	// @Output('addToArray') addToArray = new EventEmitter<Ingredient>();

  constructor( private slService: ShoppingListService) { }

  ngOnInit() {
  }

  add(form: NgForm){
    // const inputName = this.ingName.nativeElement.value;
    // const inputAmount =  this.ingAmount.nativeElement.value;
  	// const shoppingList = new Ingredient(this.inputName, this.inputAmount);
    const value = form.value;
    const shoppingList = new Ingredient(value.InputName, value.InputAmount);
  	// this.addToArray.emit(shoppingList);
    this.slService.addIngredient(shoppingList);
  }
}
