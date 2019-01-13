import React from "react"
import renderer from "react-test-renderer"

import SearchBar from "../../components/SearchBar"

it("Search bar component renders correctly", () => {
  const button = renderer.create(<SearchBar />).toJSON()
  expect(button).toMatchSnapshot()
})
