import { Component, OnInit, NgZone } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { FoodService } from '../../../../services/food.service';
import { Foods } from 'src/app/services/food';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit {

  getId:any;
  updateForm: FormGroup;
  constructor(
    public formBiulder: FormBuilder,
    private router: Router,
    private activateRout: ActivatedRoute,
    private ngZone: NgZone,
    private foodService: FoodService
  ) {
    this.getId = this.activateRout.snapshot.paramMap.get('id');
    this.foodService.getFoodById(this.getId).subscribe(res=>{
      console.log(res)
        this.updateForm.setValue({
          name:res ['name'],
          Carbohydrates: res['Carbohydrates'],
          Calories:res ['Calories'],
        })

    });

    this.updateForm = this.formBiulder.group({
      name: [''],
      Carbohydrates: [''],
      Calories: [''],
    })
   }

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.foodService.updateFood(this.getId,this.updateForm.value)
      .subscribe(() => {
        console.log('Data updated successfully')
        this.ngZone.run(() => this.router.navigateByUrl('/admin/foods'))
      }, (err) => {
        console.log(err)
      })
  }

}
