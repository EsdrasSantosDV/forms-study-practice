import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTextGenericComponent } from './select-text-generic.component';

describe('SelectTextGenericComponent', () => {
  let component: SelectTextGenericComponent;
  let fixture: ComponentFixture<SelectTextGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectTextGenericComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectTextGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
