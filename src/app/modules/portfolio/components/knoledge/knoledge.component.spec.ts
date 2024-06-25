import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnoledgeComponent } from './knoledge.component';

describe('KnoledgeComponent', () => {
  let component: KnoledgeComponent;
  let fixture: ComponentFixture<KnoledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnoledgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnoledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
