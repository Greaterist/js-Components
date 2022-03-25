export function jsonFormattedToLine(input){
  return input.replace(/[\n\r ]/g, "");
}

export function jsonLineToFormatted(input){
  return JSON.stringify(JSON.parse(input), null, "\t")
}
