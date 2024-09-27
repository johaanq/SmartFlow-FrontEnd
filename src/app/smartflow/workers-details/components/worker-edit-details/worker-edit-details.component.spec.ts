import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerEditDetailsComponent } from './worker-edit-details.component';

describe('WorkerEditDetailsComponent', () => {
  let component: WorkerEditDetailsComponent;
  let fixture: ComponentFixture<WorkerEditDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkerEditDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerEditDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
