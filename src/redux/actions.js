export function add(text) {
  return { type: "ADD_TODO", text};
}

export function del(num) {
  return { type: "TOGGLE_TODO", text };
}
