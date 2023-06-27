import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpkmnComponent } from './showpkmn.component';

describe('ShowpkmnComponent', () => {
  let component: ShowpkmnComponent;
  let fixture: ComponentFixture<ShowpkmnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowpkmnComponent]
    });
    fixture = TestBed.createComponent(ShowpkmnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
