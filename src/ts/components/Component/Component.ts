import type ComponentStructure from "../types";

abstract class Component implements ComponentStructure {
  domElement: Element;

  constructor(
    private readonly parentElement: Element,
    className: string,
    tag = "div"
  ) {
    this.domElement = document.createElement(tag);
    this.domElement.className = className;

    parentElement.appendChild(this.domElement);
  }

  abstract renderHtml(): void;
}

export default Component;
