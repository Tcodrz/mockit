import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaCreatorComponent } from './schema-creator.component';

describe('SchemaCreatorComponent', () => {
  let component: SchemaCreatorComponent;
  let fixture: ComponentFixture<SchemaCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchemaCreatorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
