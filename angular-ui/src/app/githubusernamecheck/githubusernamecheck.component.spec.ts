import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubuseridcheckComponent } from './githubusernamecheck.component';

describe('GithubuseridcheckComponent', () => {
  let component: GithubuseridcheckComponent;
  let fixture: ComponentFixture<GithubuseridcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubuseridcheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubuseridcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
     expect(component).toBeTruthy();
  });
});
