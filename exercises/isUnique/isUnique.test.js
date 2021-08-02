const isUnique = require("./isUnique")

const uniqueStrings = [
  "diego",
  "guitar",
  "mochila",
  "mexico"
]

const notUniqueStrings = [
  "parangacutirimicuaro",
  "monitor",
  "laptop",
  "glee"
]

test(`isUnique is defined`, () => {
  expect(isUnique).toBeDefined()
})

uniqueStrings.forEach(uniqueString => {
  test(`${uniqueString} is unique`, () => {
    expect(isUnique(uniqueString)).toBe(true)
  })
});


notUniqueStrings.forEach(notUniqueString => {
  test(`${notUniqueString} is not unique`, () => {
    expect(isUnique(notUniqueString)).toBe(false)
  })
});
