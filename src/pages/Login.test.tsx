import { render, screen } from "@testing-library/react";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "../store/store";

test("renders login form", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>
  );

  expect(screen.getByRole("button", { name: /login/i })).toBeDefined();
});
