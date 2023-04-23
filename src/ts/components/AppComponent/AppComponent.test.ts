import AppComponent from "./AppComponent.js";
import "isomorphic-fetch";

let container: Element;

beforeEach(() => {
  container = document.createElement("div");
});

describe("Given an instance of AppComponent", () => {
  describe("When it is initialized with a container element", () => {
    test("Then it should create and object that is an intance of  AppComponent", () => {
      const appComponentInstance = new AppComponent(container);

      expect(appComponentInstance).toBeInstanceOf(AppComponent);
    });
  });
});
