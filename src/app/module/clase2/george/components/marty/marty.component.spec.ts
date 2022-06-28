import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MartyComponent } from './marty.component';

describe('MartyComponent', () => {
  let component: MartyComponent;
  let fixture: ComponentFixture<MartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MartyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
