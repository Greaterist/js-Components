export function jsonFormattedToLine(input){
  return input.replace(/[\n\r ]/g, "");
}

export function jsonLineToFormatted(input){
  try {
        let output = JSON.parse(input);
    } catch(e) {
        alert(e);
    }
  return JSON.stringify(output, null, "\t")
}
