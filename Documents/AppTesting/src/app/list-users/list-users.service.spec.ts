import { ListUsersProxyService } from './list-users-proxy.service';
import { ListUsersProxyServiceFake } from './list-users-proxy.service.fake.spec';
import { ListUsersService } from './list-users.service';
import { inject, TestBed } from '@angular/core/testing';


describe('ListUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ListUsersService,
        {provide: ListUsersProxyService, useClass: ListUsersProxyServiceFake}
      ]
    });
  });

  it('should be created', inject([ListUsersService], (service: ListUsersService) => {
    expect(service).toBeTruthy();
  }));

  it('should get users', () => {
    const service: ListUsersService = TestBed.get(ListUsersService);
    service.getUsers().subscribe(
      (users) => {
        expect(users[0].login).toEqual('mojombo');
        expect(users[0].avatar).toBeDefined();
      }
    );
  });
});