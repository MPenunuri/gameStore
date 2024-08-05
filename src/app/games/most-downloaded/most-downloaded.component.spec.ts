import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostDownloadedComponent } from './most-downloaded.component';

describe('MostDownloadedComponent', () => {
  let component: MostDownloadedComponent;
  let fixture: ComponentFixture<MostDownloadedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostDownloadedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostDownloadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
