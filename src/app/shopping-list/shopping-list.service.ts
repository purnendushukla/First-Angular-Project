import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  startedEditing = new Subject<number>()
  ingredient: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Orange', 15)
  ];

  getIngredients(){
    return this.ingredient.slice();
  }


  getIngredient(index:number){
    return this.ingredient[index];
  }

  addIngredient(inputIng: Ingredient){
    this.ingredient.push(inputIng);
    this.ingredientChanged.emit(this.ingredient.slice());
  }

  addIngredientArr(ingredientArr: Ingredient[]){
    this.ingredient.push(...ingredientArr);
    this.ingredientChanged.emit(this.ingredient.slice());
  }

  updateIngredient(index: number, updatedIngredient: Ingredient){
    this.ingredient[index] = updatedIngredient;
    this.ingredientChanged.next(this.ingredient.slice());
  }

  deleteIngredient(index: number){
    this.ingredient.splice(index,1);
    this.ingredientChanged.next(this.ingredient.slice());
  }
}
