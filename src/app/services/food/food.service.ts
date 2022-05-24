import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id ==id)!;

  }


  getAll():Foods[]{
    return[
      {
        id: 1,
        price:100,
        name: 'Cheesy Burger' ,
        favorite:true,
        star: 4.5,
        tags:['Fastfood', 'burger','Snack'] ,
        imageUrl:'/assets/images/bergertrue.webp' ,
        cookTime:'30-40',
        origins: ['Italy'] ,
  
        },
        {
          id:2 ,
          price:150 ,
          name: 'Normal Burger ',
          favorite:false,
          star:4,
          tags:['Fastfood', 'burger','Snack']  ,
          imageUrl:'/assets/images/burger8.jpg' ,
          cookTime:'30-40',
          origins:['London'] ,
        },
        {
            id:3 ,
            price:300 ,
            name: 'Pizza' ,
            favorite:true,
            star: 4.3,
            tags:['Fastfood', 'pizza','Snack']  ,
            imageUrl:'/assets/images/smallpizza.webp' ,
            cookTime:'20-30',
            origins:['France'] ,
        },          
        {
            id:4 ,
            price: 100,
            name: ' French Fries',
            favorite:false,
            star: 4,
            tags:['Fastfood', 'crispy','Snack']  ,
            imageUrl:'/assets/images/french4.webp',
            cookTime:'20-25',
            origins:['Uae'] ,
        },          
        {
            id: 5,
            price: 350,
            name: 'pizza margherita',
            favorite:true,
            star:4.4 ,
            tags:['Fastfood', 'pizza','Snack']  ,
            imageUrl:'/assets/images/meatpizza.webp' ,
            cookTime:'20-30',
            origins:['America'],
        },    
        {
            id: 6,
            price:450 ,
            name: 'Meat pizza' ,
            favorite:false,
            star: 4.6,
            tags:['Fastfood', 'pizza','Snack']  ,
            imageUrl:'/assets/images/pizza7.jpg' ,
            cookTime:'30-35',
            origins:['Uk'] ,
        },         
        {
            id: 7,
            price:110 ,
            name: 'Shavarma' ,
            favorite:false,
            star:4.4 ,
            tags:['Fastfood', 'shavarma','Snack']  ,
            imageUrl:'/assets/images/shavarma2.jpeg' ,
            cookTime:'20-25',
            origins: ['dubai'],
        },          
        {
            id: 8,
            price: 250,
            name: 'Mushroom Soup' ,
            favorite:true,
            star: 4,
            tags:['Fastfood', 'soup','juicy']  ,
            imageUrl:'/assets/images/mushroom.jpg' ,
            cookTime:'40-50',
            origins:['america '],      
          }
         
    ];
  }
}
