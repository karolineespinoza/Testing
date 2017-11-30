import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListUsersComponent } from './list-users.component';
import { ListUsersProxyService } from './list-users-proxy.service';
import { ListUsersProxyServiceFake } from './list-users-proxy.service.fake.spec';
import { ListUsersService } from './list-users.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUsersComponent ],
      providers: [
        ListUsersService,
        {provide: ListUsersProxyService, useClass: ListUsersProxyServiceFake}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component.ngOnDestroy();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should set users', () => {
    component.ngOnInit();
    expect(component.users[0].login).toEqual('mojombo');
  });

  it('should set users undefined', () => {
    component.ngOnInit();
    expect(component.users[4]).toBeUndefined();
  });

});