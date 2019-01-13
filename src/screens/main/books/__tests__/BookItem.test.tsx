import React from "react"
import renderer from "react-test-renderer"

import BookItem from "../BookItem"

it("Book item component renders correctly", () => {
  const book = renderer.create(<BookItem />).toJSON()
  expect(book).toMatchSnapshot()
})
