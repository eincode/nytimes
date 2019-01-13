import React from "react"
import renderer from "react-test-renderer"

import SortButton from "../SortButton"

it("Sort button component renders correctly", () => {
  const button = renderer.create(<SortButton />).toJSON()
  expect(button).toMatchSnapshot()
})
