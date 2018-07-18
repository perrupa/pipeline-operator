import { _ } from 'param.macro'

// add(1, 2)
const add = (x, y) => x + y

// unaryAddition(1)(2)
const unaryAddition = x => y => x + y

describe('Pipeline operator chains functions', () =>{
  it('chains functions', () => {
    const x = "hello"
      |> String.prototype.toUpperCase.call

    expect(x).toMatch(/HELLO/)
  })

  it('chains functions with lamdas', () => {
    const x = 12
      |> (y => add(y, 1))

    expect(x).toBe(13)
  })

  it('chains functions', () => {
    const x = 1
      |> unaryAddition(12)

    expect(x).toBe(13)
  })

  it('partial application with _', () => {
    const x = 1
      |> add(_, 12)

    expect(x).toBe(13)
  })

  it('multiple times', () => {
    const x = 1
      |> add(_, 6)
      |> add(_, 6)

    expect(x === 13)
  })
})
