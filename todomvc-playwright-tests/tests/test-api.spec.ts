import { test, expect } from '@playwright/test';

const BASE_URL = 'https://reqres.in/api';
const DEFAULT_HEADERS = {
  'x-api-key': 'reqres-free-v1',
};

test.describe('ReqRes API Tests', () => {
  /**
   * 1. GET list of users
   */
  test('GET list users', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/users?page=2`);
    
    console.log('GET list users response:', await response.json());

    // Verify response is successful
    expect(response.ok(), 'GET list users should return ok status').toBeTruthy();

    const body = await response.json();

    // Validate response body
    expect(body.page, 'Response page should be 2').toBe(2);
    expect(Array.isArray(body.data), 'Response data should be an array').toBeTruthy();
    expect(body.data.length, 'Response data array should not be empty').toBeGreaterThan(0);
  });

  /**
   * 2. Create a new user
   */
  test('Create user', async ({ request }) => {
    const newUser = {
      name: 'Mike Oheri',
      job: 'Engineer',
    };

    const response = await request.post(`${BASE_URL}/users`, {
      headers: DEFAULT_HEADERS,
      data: newUser,
    });

    console.log('Create user response:', await response.json());

    // Verify response code
    expect(response.status(), 'Create user should return 201').toBe(201);

    const body = await response.json();

    // Validate response body keys & values
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('name');
    expect(body).toHaveProperty('job');

    expect(body.name, 'Created user name should match').toBe(newUser.name);
    expect(body.job, 'Created user job should match').toBe(newUser.job);
  });

  /**
   * 3. Update an existing user
   */
  test('Update user', async ({ request }) => {
    const updatedUser = {
      name: 'Mike Oheri',
      job: 'Manager',
    };

    const response = await request.put(`${BASE_URL}/users/2`, {
      headers: DEFAULT_HEADERS,
      data: updatedUser,
    });

    console.log('Update user response:', await response.json());

    // Verify response code
    expect(response.status(), 'Update user should return 200').toBe(200);

    const body = await response.json();

    // Validate response body
    expect(body.name, 'Updated user name should match').toBe(updatedUser.name);
    expect(body.job, 'Updated user job should match').toBe(updatedUser.job);
    expect(body.updatedAt, 'Updated user should have updatedAt timestamp').toBeDefined();
  });

  /**
   * 4. Negative test case: User not found
   */
  test('Negative case - user not found', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/users/9999`, {
      headers: DEFAULT_HEADERS,
    });

    console.log('Negative case response:', await response.json());

    // Verify response code
    expect(response.status(), 'User not found should return 404').toBe(404);
  });
});
