import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {
  InputTextFormFieldGenericComponent
} from "./input-text-form-field-generic/input-text-form-field-generic.component";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, InputTextFormFieldGenericComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  formBuilder=inject(FormBuilder);
  form=this.formBuilder.group({
    name:[null],
    email:[null],
    message:[null]
  })

}
