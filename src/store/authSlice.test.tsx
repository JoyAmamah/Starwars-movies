// __tests__/authSlice.test.ts
import authReducer, { setUser } from "../store/authSlice";

test("should handle setUser", () => {
  const initialState = {
    user: { email: null, uid: null, token: null },
    isAuthenticated: false,
  };

  const userPayload = {
    email: "test@example.com",
    uid: "123",
    token: "abc123",
  };

  const result = authReducer(initialState, setUser(userPayload));
  expect(result?.user.email).toBe("test@example.com");
  expect(result.isAuthenticated).toBe(true);
});
