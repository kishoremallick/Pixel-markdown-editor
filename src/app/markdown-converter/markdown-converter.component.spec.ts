import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownConverterComponent } from './markdown-converter.component';

describe('MarkdownConverterComponent', () => {
  let component: MarkdownConverterComponent;
  let fixture: ComponentFixture<MarkdownConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
