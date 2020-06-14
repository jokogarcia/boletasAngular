import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBoletaComponent } from './new-boleta.component';

describe('NewBoletaComponent', () => {
  let component: NewBoletaComponent;
  let fixture: ComponentFixture<NewBoletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBoletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBoletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
