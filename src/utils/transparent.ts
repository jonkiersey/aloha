const transparent = (color: string, opacity: number): string => {
  // if color is in rgb format add opacity and return
  if (color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/) !== null) {
    return color.slice(0, color.length - 1) + `, ${opacity})`;
  }
  // else assume hex format and convert to rgba
  const red = parseInt(color.slice(1, 3), 16);
  const green = parseInt(color.slice(3, 5), 16);
  const blue = parseInt(color.slice(5, 7), 16);
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};

export default transparent;
