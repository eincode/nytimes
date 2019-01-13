import React from "react"
import renderer from "react-test-renderer"

import ArticleItem from "../ArticleItem"

it("Sort button component renders correctly", () => {
  const article = renderer.create(<ArticleItem />).toJSON()
  expect(article).toMatchSnapshot()
})
