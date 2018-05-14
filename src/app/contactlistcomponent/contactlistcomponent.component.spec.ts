import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactlistcomponentComponent } from './contactlistcomponent.component';

describe('ContactlistcomponentComponent', () => {
  let component: ContactlistcomponentComponent;
  let fixture: ComponentFixture<ContactlistcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactlistcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactlistcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
