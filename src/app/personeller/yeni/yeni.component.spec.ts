import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YeniComponent } from './yeni.component';

describe('YeniComponent', () => {
  let component: YeniComponent;
  let fixture: ComponentFixture<YeniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
