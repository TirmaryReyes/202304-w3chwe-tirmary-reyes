import type ComponentStructure from "../types.js";

abstract class Component implements ComponentStructure {
  domElement: HTMLElement;

  constructor(
    private readonly parentElement: HTMLElement,
    className: string,
    tag = "div"
  ) {
    this.domElement = document.createElement(tag);
    this.domElement.className = className;

    this.parentElement.appendChild(this.domElement);
  }

  abstract renderHtml(): void;
}

export default Component;
