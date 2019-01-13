import React from "react"
import renderer from "react-test-renderer"

import ArticleItem from "../ArticleItem"

it("Sort button component renders correctly", () => {
  const button = renderer.create(<ArticleItem />).toJSON()
  expect(button).toMatchSnapshot()
})
