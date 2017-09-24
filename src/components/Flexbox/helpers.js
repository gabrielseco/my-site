const getProperty = (keyCss, keyJs) => (props) => {
  const prop = props[keyJs];
  if(prop === undefined) return '';
  return `
    ${keyCss}: ${prop}
  `;
};

export default getProperty;
