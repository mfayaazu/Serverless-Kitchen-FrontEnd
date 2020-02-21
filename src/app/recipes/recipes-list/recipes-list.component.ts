import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-4.jpg'),
    new Recipe('A Test Recipe','This is simply a test','https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-4.jpg')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
