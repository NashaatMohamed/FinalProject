import { Component, OnInit ,NgZone} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import{ProductService}from '../../../../services/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { FormGroup,FormBuilder } from '@angular/forms';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  selectedFile=null;
  url= "./assets/not.jpg";

  productForm:FormGroup;

  constructor(private  http:HttpClient ,  public formBiulder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private productservice:ProductService) {
      this.productForm=this.formBiulder.group({
        name:[''],
        price:[''],
        amount:[''],
        image:[''],
        fileSource: [null],
        details:[''],
        category_id:['']
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
  // uploadFile(event : Event){
  //   const file = (event.target as HTMLInputElement)?.files?.[0];
  //   this.productForm.patchValue({
  //     image : file
  //   });
  // }

  // submitForm(){
  //   const formData:any = new FormData();
  //   formData.append("image",this.productForm.controls['image'].value);
  // }

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
  }

}
