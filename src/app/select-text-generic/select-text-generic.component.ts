import { Component, DestroyRef, forwardRef, inject, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NG_VALUE_ACCESSOR, FormBuilder } from '@angular/forms';
import { noop, tap } from 'rxjs';


@Component({
  selector: 'app-select-text-generic',
  standalone: true,
  imports: [],
  templateUrl: './select-text-generic.component.html',
  styleUrl: './select-text-generic.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectTextGenericComponent),
      multi: true,
    },
  ],
})
export class SelectTextGenericComponent {
  formBuilder=inject(FormBuilder);

  formControl=this.formBuilder.control<number | string | null>(null);



  

    
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
