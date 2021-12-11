import { User } from '../ts/user';

let mockUser: User;
const mockName = 'test';
const mockAge = 123;

beforeEach(() => mockUser = new User(mockName, mockAge));

describe('userName', () => {
  it('should return users name', () => {
    expect(mockUser.userName).toBe(mockName);
  })
});

describe('userAge', () => {
  it('should return users age', () => {
    expect(mockUser.userAge).toBe(mockAge);
  })
});

describe('incrementAge', () => {
  it('should increment users age by one', () => {
    mockUser.incrementAge();
    expect(mockUser.userAge).toBe(mockAge + 1);
  });
});