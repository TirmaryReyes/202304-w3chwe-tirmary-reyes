interface ComponentStructure {
  domElement: Element;
  renderHtml: () => void;
  addListeners?: () => void;
}

export default ComponentStructure;
