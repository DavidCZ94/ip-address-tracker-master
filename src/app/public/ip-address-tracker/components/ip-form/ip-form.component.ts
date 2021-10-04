import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IpLocationService } from '../../shared/ip-location.service';

@Component({
  selector: 'app-ip-form',
  templateUrl: './ip-form.component.html',
  styleUrls: ['./ip-form.component.scss']
})
export class IpFormComponent implements OnInit {
  
  form: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private ipLocationService: IpLocationService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm():void{
    const regexForIp = '^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$';
    
    this.form = this.formBuilder.group({
      ip: ['', [
        Validators.required, 
        Validators.pattern(regexForIp),
        Validators.maxLength(15)
      ]]
    })
  }

  onSubmit(): void{
    this.ipLocationService.geIpLocation(this.form.value.ip).subscribe(
      error => {}
    );
  }

}
