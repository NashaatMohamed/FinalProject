import { Component, OnInit, NgZone } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { ProductService } from '../../../../services/product.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import{CategoryService}from '../../../../services/category.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  categories:any;
  getId:any;
  updateForm: FormGroup;
 control=new FormControl;

  constructor(
    public formBiulder: FormBuilder,
    private router: Router,
    private activateRout: ActivatedRoute,
    private ngZone: NgZone,
    private productService: ProductService,
    private categoryService: CategoryService
  )  { this.getId = this.activateRout.snapshot.paramMap.get('id');
  this.productService.getproduct(this.getId).subscribe(res=>{
    console.log(res)
      this.updateForm.setValue({
        name:res ['name'],
        price: res['price'],
        amount:res ['amount'],
        details:res ['details'],
        category_id:res ['category_id'],
        image:res['fileSource'],

      })

  });

  this.updateForm = this.formBiulder.group({
    name: [''],
    price: [''],
    amount: [''],
    details: [''],
    category_id: this.control,
    

  })}

  ngOnInit(): void {
    this.getAllCategories();
  }






  onUpdate(): any {
    this.productService.updateproduct(this.getId,this.updateForm.value)
      .subscribe(() => {
        console.log('Data updated successfully')
        this.ngZone.run(() => this.router.navigateByUrl('/admin/products'))
      }, (err) => {
        console.log(err)
      })
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
