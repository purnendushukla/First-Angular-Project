import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe 1',
      'Test Recipe 1 Description',
      'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg',
      [
          new Ingredient('Apple', 10),
          new Ingredient('banana', 5),
        ]
    ),
    new Recipe(
      'Test Recipe 2',
      'Test Recipe 2 Description',
      'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg',
      [
          new Ingredient('grapes', 11),
          new Ingredient('orange', 9),
        ]
      )
  ];
  getRecipes() {
    return this.recipes.slice();
  }

  constructor(private slService: ShoppingListService){}

  addToshoppingList(ingredientArr: Ingredient[]){
    this.slService.addIngredientArr(ingredientArr);
  }

  getRecipeById(id: number){
    return this.recipes.slice()[id];
  }
  addRecipe(newRecipe: Recipe){
    this.recipes.push(newRecipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(id: number, newRecipe: Recipe){
    this.recipes[id] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id,1);
    this.recipeChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

}
