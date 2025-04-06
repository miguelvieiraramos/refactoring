const statement = require("./statement")
const invoices = require('./invoices.json')
const plays = require('./plays.json')

test("Should return the correct statement", () => {
    const result = statement(invoices[0], plays)
    const expectedResult = `Statement for BigCo\n  Hamlet: $650.00 (55 seats)\n  As You Like It: $580.00 (35 seats)\n  Othello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n`
    expect(result).toBe(expectedResult)
})
