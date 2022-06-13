import cssVars from 'css-vars-ponyfill';

export const CSS3VariablesPolyfill = (variables: any) => {
  cssVars({
    variables,
    watch: true,
    onlyLegacy: true,
    include: 'link[rel=stylesheet], style',
    exclude: '[data-cssvars-skip]',
    rootElement: document.head
  });
};
