export const getComponentClassName = (componentClassName = "") =>
  (elementClassName = null) =>
    [componentClassName]
      .concat(elementClassName)
      .join(elementClassName && elementClassName.indexOf("--") !== 0 ? "__" : "");

