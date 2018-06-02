import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  expenseForm: FormGroup;
  userObj: any;
  acc: any = ['Food', 'Fees', 'Rent', 'Fare', 'Travel', 'Hotel', 'Phone', 'Internet', 'Repairs', 'Gas', 'Doctor', 'Books', 'Gift', 'Restaurant', 'Electricity', 'Other'];
  expid: string;
  pgTitle: string;
  btnLbl: string;
  constructor(private router: Router, private route: ActivatedRoute,private fb: FormBuilder) { }

  expdate = new FormControl('', [Validators.required]);
  expaccount = new FormControl('', [Validators.required]);
  expamt = new FormControl('', [Validators.required, Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]);
  expdesc = new FormControl();
  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.expid = params['id'];
        this.getExpense(this.expid);
        this.pgTitle = "Edit";
        this.btnLbl = "Update"
      } else {
        this.pgTitle = "Add";
        this.btnLbl = "Submit"
      }
    });
    this.expenseForm = this.fb.group({
      expdate: this.expdate,
      expaccount: this.expaccount,
      expamt: this.expamt,
      expdesc: this.expdesc
    });
  }
    

getExpense(id){
  
}

populateForm(data): void {
  
}

saveExpense(formdata:any): void {
  
}

onBack(): void {
  this.router.navigate(['/report'], { preserveQueryParams: true });
}

}
