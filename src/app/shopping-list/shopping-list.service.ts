import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  ingredient: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Orange', 15)
  ];

  getIngredients(){
    return this.ingredient.slice();
  }

  addIngredient(inputIng: Ingredient){
    this.ingredient.push(inputIng);
    this.ingredientChanged.emit(this.ingredient.slice());
  }

  addIngredientArr(ingredientArr: Ingredient[]){
    this.ingredient.push(...ingredientArr);
    this.ingredientChanged.emit(this.ingredient.slice());
  }
}
