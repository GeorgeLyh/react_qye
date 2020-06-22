export function add(num) {
  return { type: "ADD", data: num };
}

export function del(num) {
  return { type: "DEL", data: num };
}
