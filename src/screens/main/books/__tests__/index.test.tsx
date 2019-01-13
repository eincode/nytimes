import React from "react"

import Index, { ListName } from "../index"
import { shallow } from "enzyme"
import { TouchableOpacity, Text } from "react-native"
import Modal from "react-native-modal"

const wrapper = shallow<Index>(<Index />)

describe("Books screen", () => {
  it("Successfully fetched data and changed state", async () => {
    await wrapper.instance().getBooks(wrapper.instance().state.listName)
    expect(Array.isArray(wrapper.instance().state.books)).toEqual(true)
  })
})

describe("Toggle modal state", () => {
  it("Modal state has changed", () => {
    wrapper.instance().toggleModalState()
    expect(wrapper.instance().state.isModalVisible).toBe(true)
  })
  it("Modal state has changed by pressing book sort by:", () => {
    wrapper.instance().toggleModalState = jest.fn()
    wrapper
      .find(Text)
      .first()
      .simulate("press")
    expect(wrapper.instance().toggleModalState).toHaveBeenCalled()
  })
  it("Modal state has changed by pressing modal backdrop", () => {
    wrapper.find(Modal).simulate("backdropPress")
    expect(wrapper.instance().toggleModalState).toHaveBeenCalled()
  })
})

describe("Change list name", () => {
  it("List name doesn't change if sort method is equal", () => {
    wrapper.instance().getBooks = jest.fn()
    wrapper.instance().setListName(ListName.EBOOK)
    expect(wrapper.instance().getBooks).not.toHaveBeenCalled()
  })
  it("List name changed", () => {
    wrapper.instance().setListName(ListName.HARD)
    expect(wrapper.instance().state.listName).toEqual(ListName.HARD)
  })
  it("Get books method called when choosing list name", () => {
    wrapper.instance().getBooks = jest.fn()
    const nodes = wrapper.find(TouchableOpacity)
    nodes.first().simulate("press")
    nodes.at(1).simulate("press")
    expect(wrapper.instance().getBooks).toBeCalledTimes(2)
  })
})
