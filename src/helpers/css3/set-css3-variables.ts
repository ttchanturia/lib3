export const setCSS3Variables = (variables: Record<string | number | symbol, any> = {}) => {
  const root: HTMLElement = document.querySelector(':root')!;
  Object.keys(variables).forEach((key: string) => {
    const value = variables[key];
    root.style.setProperty(`--${key}`, value);
  });
};
