import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHumainComponent } from './page-humain.component';

describe('PageHumainComponent', () => {
  let component: PageHumainComponent;
  let fixture: ComponentFixture<PageHumainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHumainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHumainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
