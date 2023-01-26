import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  submitted = false; 
  
  departForm = this.fb.group({
    departementName: ['', Validators.required]
  });

  constructor(private fb : FormBuilder, private deptService: DepartementService) { 
  }

  get f() {
    return this.departForm.controls;
  }

  submit(): void {

    this.submitted = true;

    if (this.departForm.invalid) {
      return;
    } else {
      console.log(this.departForm.value);
      this.deptService.postDepartements(this.departForm.value).subscribe(response => {
        console.log("ok");
      }, error => console.log(error));
    }
  }

}
