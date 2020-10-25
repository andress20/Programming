
const quotes = []
let nextId = 0

function list() {
  return quotes
}
/**
 * Create quote
 * @type {quote}
 * @param {String} text
 * @param {String} author
 * @returns {quote}
 */
function create(text, author) {
  const quote = { id: nextId, text, author }
  quotes.push(quote)
  nextId++

  return quote
}
/**
 * Edit quote
 * @type {quote}
 * @param {Number} id
 * @param {String} text
 * @param {String} author
 */
function edit(id, text, author) {
  const idx = quotes.findIndex(q => q.id == id)
if (idx >= 0) {
    quotes[idx].text = text
    quotes[idx].author = author
  }
}
/**
 * Destroy quote
 * @type {quote}
 * @param {Number} id
 */
function destroy(id) {
  const idx = quotes.findIndex(q => q.id == id)
  if (idx >= 0) {
    quotes.splice(idx, 1)
  }
}

module.exports = { list, create, edit, destroy }


