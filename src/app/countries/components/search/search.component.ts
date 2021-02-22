import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
   regions: string[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  myForm: FormGroup = this.fb.group({
    search: ['', Validators.required],
    select: ['', Validators.required],
  });


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  search() {
    if(this.myForm.get('search')?.value == "" || this.myForm.invalid){
      return;
    }
    this.onSearch.emit(this.myForm.value);
  }
}
