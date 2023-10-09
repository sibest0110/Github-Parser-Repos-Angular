import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPrizmComponent } from './test-prizm.component';

describe('TestPrizmComponent', () => {
  let component: TestPrizmComponent;
  let fixture: ComponentFixture<TestPrizmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestPrizmComponent]
    });
    fixture = TestBed.createComponent(TestPrizmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
