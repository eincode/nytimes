import React from "react"

import Index, { SortMethod } from "../index"
import { shallow } from "enzyme"
import SortButton from "../SortButton"
import { TouchableOpacity } from "react-native"
import Modal from "react-native-modal"
import SearchBar from "../../../../components/SearchBar"

const wrapper = shallow<Index>(<Index />)

describe("Article screen", () => {
  it("Successfully fetched data and changed state", async () => {
    await wrapper.instance().searchArticle("")
    expect(Array.isArray(wrapper.state().articles)).toEqual(true)
  })
})

describe("Toggle modal state", () => {
  it("Modal state has changed", () => {
    wrapper.instance().toggleModalState()
    expect(wrapper.instance().state.isModalVisible).toBe(true)
  })
  it("Modal state has changed by pressing sort button", () => {
    wrapper.instance().toggleModalState = jest.fn()
    wrapper.find(SortButton).simulate("press")
    expect(wrapper.instance().toggleModalState).toHaveBeenCalled()
  })
  it("Modal state changed when modal backdrop pressed", () => {
    wrapper.find(Modal).simulate("backdropPress")
    expect(wrapper.instance().toggleModalState).toHaveBeenCalled()
  })
})

describe("Change sort method", () => {
  it("Sort method doesn't change if sort method is equal", () => {
    wrapper.instance().searchArticle = jest.fn()
    wrapper.instance().setSortMethod(SortMethod.DEFAULT)
    expect(wrapper.instance().searchArticle).not.toHaveBeenCalled()
  })
  it("Sort method changed", () => {
    wrapper.instance().setSortMethod(SortMethod.NEWEST)
    expect(wrapper.instance().state.sortMethod).toEqual(SortMethod.NEWEST)
  })
  it("Set sort method called when pressing sort method button", () => {
    wrapper.instance().setSortMethod = jest.fn()
    const nodes = wrapper.find(TouchableOpacity)
    nodes.first().simulate("press")
    nodes.at(1).simulate("press")
    nodes.at(2).simulate("press")
    expect(wrapper.instance().setSortMethod).toBeCalledTimes(3)
  })
})

describe("Search query", () => {
  it("Changes query state by changing search bar value", () => {
    wrapper.instance().setState = jest.fn()
    wrapper.find(SearchBar).simulate("changeText")
    expect(wrapper.instance().setState).toHaveBeenCalled()
  })
  it("Calls search article method when submitting", () => {
    wrapper.instance().searchArticle = jest.fn()
    wrapper.find(SearchBar).simulate("submitEditing")
    expect(wrapper.instance().searchArticle).toHaveBeenCalledWith(
      wrapper.instance().state.query,
    )
  })
})
