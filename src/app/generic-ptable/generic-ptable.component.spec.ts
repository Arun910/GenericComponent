import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericPtableComponent } from './generic-ptable.component';

describe('GenericPtableComponent', () => {
  let component: GenericPtableComponent;
  let fixture: ComponentFixture<GenericPtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericPtableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericPtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
