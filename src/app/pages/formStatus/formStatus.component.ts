import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './template.component.html',
})
export default class CustomComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    secondname: new FormControl(''),
  });

  ngOnInit() {
    this.form.get('name').statusChanges.subscribe((newStatus) => {
      console.log('Status name:', newStatus);
      console.log('Status Form name:', this.form.get('name'));
    });
    this.form.get('name').valueChanges.subscribe((newValue) => {
      console.log('Value name:', newValue);
    });
  }

  changeNameNoEvent() {
    this.form.get('name').setValue('', { emitEvent: false });
  }

  changeName() {
    this.form.get('name').setValue('');
  }

  disableName() {
    this.form.get('name').disable();
  }

  callingFunction() {
    console.log(this.form.value);
  }
}
