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

  it('returns user data because the user exist', () => {
    component.getUser('mojombo');
    const object = JSON.parse(JSON.stringify(component.result));
    expect(object.foundUser.login).toContain('mojombo')
  });

  it('returns data empty because the nombreUsuario is empty', () => {
    component.getUser('');
    const object = JSON.parse(JSON.stringify(component.result));
    expect(object.encontrado).toEqual('');
  });

 

  it('returns in field encontrado "El usuario no existe" because the user not exist', () => {
    component.getUser('test');
    const object = JSON.parse(JSON.stringify(component.result));
    console.log(object)
    console.log(object.encontrado)
    expect(object.encontrado).toEqual('El usuario no existe');
  });

});