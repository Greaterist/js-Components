export function jsonFormattedToLine(input){
  return input.replace(/[\n\r ]/g, "");
}

export function jsonLineToFormatted(input){
  try {
    JSON.parse(input);
    } catch(e) {
        alert(e);
      return null;
    }
  return JSON.stringify(JSON.parse(input), null, "\t");
}
