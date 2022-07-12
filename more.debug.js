



console.time('timer')
const items = []
for (let i = 0; i < 100; i++) {
    items.push(`element ${i + 1}`)
}
console.timeEnd('timer')
console.table(document