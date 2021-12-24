import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../../redux/store";
import ExerciseCard from "./ExerciseCard";

describe("Given a ExerciseCard component", () => {
  describe("When it renders", () => {
    test("Then it should render an array with an image", () => {
      const exercise = { meters: "200", description: "suave" };
      const store = configureStore();
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ExerciseCard exercise={exercise} />
          </BrowserRouter>
        </Provider>
      );
      const title = screen.getByText("suave");

      expect(title).toBeInTheDocument();
    });
  });
});
