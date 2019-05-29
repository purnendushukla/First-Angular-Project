import {
  Component,
  OnInit,
  ViewChild, Output, EventEmitter, ElementRef,
  OnDestroy
  } from '@angular/core';

import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import index from '@angular/cli/lib/cli';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
	// @ViewChild('inputName') ingName : ElementRef;
	// @ViewChild('inputAmount') ingAmount : ElementRef;

  inputName = "";
  inputAmount = "";
	// @Output('addToArray') addToArray = new EventEmitter<Ingredient>();
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode= false;
  editIndexNumber: number;
  editIngredient: Ingredient;
  constructor( private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number)=>{
        this.editMode = true;
        this.editIndexNumber = index;
        this.editIngredient = this.slService.getIngredient(index);
        this.slForm.setValue({
          InputName : this.editIngredient.name,
          InputAmount : this.editIngredient.amount
        });
      }
    );
  }

  onSubmit(form: NgForm){
    // const inputName = this.ingName.nativeElement.value;
    // const inputAmount =  this.ingAmount.nativeElement.value;
  	// const shoppingList = new Ingredient(this.inputName, this.inputAmount);
    const value = form.value;
    const shoppingList = new Ingredient(value.InputName, value.InputAmount);
  	// this.addToArray.emit(shoppingList);
    if(this.editMode){
      this.slService.updateIngredient(this.editIndexNumber, shoppingList);
    } else{
      this.slService.addIngredient(shoppingList);
    }
    this.editMode = false;
    form.reset();

  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.slService.deleteIngredient(this.editIndexNumber);
  }


  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
