import {Component, DestroyRef, forwardRef, inject, input, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import { noop, tap} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-input-text-form-field-generic',
  standalone: true,
  imports: [ReactiveFormsModule, MatLabel, MatFormField, MatInput],
  templateUrl: './input-text-form-field-generic.component.html',
  styleUrl: './input-text-form-field-generic.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextFormFieldGenericComponent),
      multi: true,
    },
  ],
})
export class InputTextFormFieldGenericComponent  implements ControlValueAccessor, OnInit {
  formBuilder=inject(FormBuilder);

  formControl=this.formBuilder.control<number | string | null>(null);
  
  typeField=input.required<string>({
    alias: 'typeField',
  })
  
  label=input.required<string>({
    alias: 'label',
  })



  destroyRef: DestroyRef = inject(DestroyRef);

  onChange: (value: number | string | null) => void = noop;
  onTouch: () => void = noop;

  registerOnChange(fn: (value: number | string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  writeValue(value: number | string | null): void {
    this.formControl.setValue(value, { emitEvent: false });
  }

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(
        tap(value => this.onChange(value)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }
}
