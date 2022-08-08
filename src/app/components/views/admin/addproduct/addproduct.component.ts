import { Component, OnInit ,NgZone} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import{ProductService}from '../../../../services/product.service';

import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{CategoryService}from '../../../../services/category.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
   categories:any;

   n=new Audio
  selectedFile=null;
  url= "./assets/not.jpg";
  change:any=0;
  productForm:FormGroup;

  control=new FormControl;
  constructor(private  http:HttpClient ,  public formBiulder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private productservice:ProductService,
    private categoryService:CategoryService) {
      this.productForm=this.formBiulder.group({
        name:[''],
        price:[''],
        amount:[''],
        image:[''],
        fileSource: [null],
        details:[''],
        category_id:this.control,
      })
     }







   onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.productForm.patchValue({
        fileSource: file
      });
    }
  }


  onSubmit():any{
    // const formData:any = new FormData();
    // formData.append("image",this.productForm.controls['image'].value);

    const formData :any= new FormData();
    formData.append('image', this.productForm.get('fileSource')?.value);
    formData.append('price', this.productForm.get('price')?.value);
    formData.append('name', this.productForm.get('name')?.value);
    formData.append('details', this.productForm.get('details')?.value);
    formData.append('amount', this.productForm.get('amount')?.value);
    formData.append('category_id', this.productForm.get('category_id')?.value);


    this.productservice.addproducts(formData)
    .subscribe((res)=>{
      console.log('class added successfully')
      console.log(res);
      this.ngZone.run(()=> this.router.navigateByUrl('/admin/products'))
    },(err)=>{
      console.log(err)
    })
  }





  ngOnInit(): void {
    this.getAllCategories();

  }



  getAllCategories(){
    this.categories=this.categoryService.allCategories().subscribe(res=>{
      this.categories=res;
      console.log(this.categories);
   },(err)=>{
     // console.log(err);
   })
}
}
