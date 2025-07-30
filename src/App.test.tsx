// __tests__/App.test.tsx
import { render } from "@testing-library/react";
import App from "./App";
import * as reactRedux from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import * as firebase from "../firebase";

jest.mock("firebase/auth", () => ({
  onAuthStateChanged: jest.fn(),
}));

jest.mock("../firebase", () => ({
  auth: {},
}));

test("App sets user if Firebase auth returns a user", () => {
  const mockDispatch = jest.fn();
  jest.spyOn(reactRedux, "useDispatch").mockReturnValue(mockDispatch);

  (onAuthStateChanged as jest.Mock).mockImplementation((_, callback) => {
    callback({
      email: "test@example.com",
      uid: "123",
      getIdToken: () => Promise.resolve("token123"),
    });
    return jest.fn(); // unsubscribe
  });

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(mockDispatch).toHaveBeenCalled();
});
