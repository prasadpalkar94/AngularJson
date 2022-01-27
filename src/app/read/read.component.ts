import { Component, OnInit } from '@angular/core';
import { JsonserviceService } from '../jsonservice.service';


// export interface Product{
//   p_id: any;
//   p_name: any;
//   p_cost: any;
//   p_availability: any;
//   p_details: any;
//   p_category: any;
//   p_quantity: any;
//   p_image: any;
// }

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})

export class ReadComponent implements OnInit {

  constructor(private jsonservice:JsonserviceService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllProducts: any;
  getAllData(){
     this.jsonservice.getAllProducts().subscribe(res=>{
       this.getAllProducts = res;
       console.log(this.getAllProducts);
     })
  }

}
