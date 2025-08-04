import { render, screen } from "@testing-library/react";
import Register from "../pages/Register";
import { Provider } from "react-redux";
import {store} from "../store/store";
import { BrowserRouter } from "react-router-dom";

test("submit is disabled initially", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </Provider>
  );

  const button = screen.getByRole("button", { name: /register/i });
  expect(button).toBeDisabled();
});
