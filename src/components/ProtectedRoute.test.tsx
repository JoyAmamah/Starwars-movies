import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

test("redirects to login if unauthenticated", () => {
  const store = mockStore({
    auth: {
      isAuthenticated: false,
    },
  });

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/home"]}>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <div>Protected Content</div>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<div>Login Page</div>} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByText(/login page/i)).toBeInTheDocument();
});
