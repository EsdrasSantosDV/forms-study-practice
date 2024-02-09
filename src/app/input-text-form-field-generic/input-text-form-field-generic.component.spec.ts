import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextFormFieldGenericComponent } from './input-text-form-field-generic.component';

describe('InputTextFormFieldGenericComponent', () => {
  let component: InputTextFormFieldGenericComponent;
  let fixture: ComponentFixture<InputTextFormFieldGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTextFormFieldGenericComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputTextFormFieldGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
