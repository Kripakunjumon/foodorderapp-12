import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food/food.service';
import { Foods } from 'src/app/shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  food!:Foods;

  constructor(private activatedRoute:ActivatedRoute,
    private foodService:FoodService,private cartService:CartService,private router:Router) { 
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.food = foodService.getFoodById(params['id'])
      })
    }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
function id(params: Params, id: any): Foods {
  throw new Error('Function not implemented.');
}

