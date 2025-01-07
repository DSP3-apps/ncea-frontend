import { getLoginDetails } from '../../src/utils/loginDetails';

describe('getLoginDetails', () => {
  it('check if userObj is passed as undefined', () => {
    const { userDisplayName, isLoggedIn } = getLoginDetails(undefined);
    expect(userDisplayName).toBe('');
    expect(isLoggedIn).toBe(false);
  });
  it('check if userObj is passed as {}', () => {
    const { userDisplayName, isLoggedIn } = getLoginDetails(undefined);
    expect(userDisplayName).toBe('');
    expect(isLoggedIn).toBe(false);
  });
  it('check if userObj is passed as empty string', () => {
    const { userDisplayName, isLoggedIn } = getLoginDetails('');
    expect(userDisplayName).toBe('');
    expect(isLoggedIn).toBe(false);
  });
  it('check if value userObj data is being passed', () => {
    const userObj = { email: 'test@test.com', name: 'test' };
    const { userDisplayName, isLoggedIn } = getLoginDetails(userObj);
    expect(userDisplayName).toBe('test@test.com');
    expect(isLoggedIn).toBe(true);
  });
});
