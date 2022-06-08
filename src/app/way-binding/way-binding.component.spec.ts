import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WayBindingComponent } from './way-binding.component';

describe('WayBindingComponent', () => {
  let component: WayBindingComponent;
  let fixture: ComponentFixture<WayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WayBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
