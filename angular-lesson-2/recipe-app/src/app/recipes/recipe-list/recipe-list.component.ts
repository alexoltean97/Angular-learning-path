import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  
   public recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple a test', 'https://placehold.co/600x400'),
    new Recipe('A Test Recipe', 'This is simple a test 2', 'https://placehold.co/600x400')
   ];




}
