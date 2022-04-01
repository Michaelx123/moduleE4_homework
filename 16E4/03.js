function createEmptyObj (obj) {
  return Object.create(null)
}

const a = createEmptyObj();

console.log(a.prototype);