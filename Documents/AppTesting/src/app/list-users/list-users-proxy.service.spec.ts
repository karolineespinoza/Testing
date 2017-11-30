import { async, inject, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ListUsersProxyService } from './list-users-proxy.service';
 
 
describe('ListUsersProxyServiceIT', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ListUsersProxyService]
    });
  });
 
  it('should be created', inject([ListUsersProxyService], (service: ListUsersProxyService) => {
    expect(service).toBeTruthy();
  }));
 
  it ('should get users', async(() => {
    const service: ListUsersProxyService = TestBed.get(ListUsersProxyService);
    service.getUsers().subscribe(
      (response) => expect(response.json()).not.toBeNull(),
      (error) => fail(error)
    );
  }));
});