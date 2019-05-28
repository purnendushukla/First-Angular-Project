import {Ingredient} from '../shared/ingredient.model';

export class Recipe {
	public name;
	public description;
	public imagePath;
	public ingredients: Ingredient[];
	constructor(name, desc, imagePath, ingredients) {
		this.name = name;
		this.description = desc;
		this.imagePath = imagePath;
		this.ingredients = ingredients;
	}
}
