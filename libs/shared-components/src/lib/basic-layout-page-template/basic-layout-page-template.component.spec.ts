import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLayoutPageTemplateComponent } from './basic-layout-page-template.component';

describe('BasicLayoutPageTemplateComponent', () => {
  let component: BasicLayoutPageTemplateComponent;
  let fixture: ComponentFixture<BasicLayoutPageTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicLayoutPageTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicLayoutPageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
