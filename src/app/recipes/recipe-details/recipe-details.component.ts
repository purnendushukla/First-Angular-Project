import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
	selectedRecipeInfo: Recipe;
  id: number;
  constructor( private recipeService: RecipeService,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.selectedRecipeInfo = this.recipeService.getRecipeById(this.id);
      }
    )
  }

  addToShoppingList(){
    this.recipeService.addToshoppingList(this.selectedRecipeInfo.ingredients);
  }

}
