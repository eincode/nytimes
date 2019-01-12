import { Dimensions } from "react-native"

const { width, height } = Dimensions.get("window")

export default {
  PRIMARY_COLOR: "rgb(43, 152, 240)",
  SHADOW_COLOR: "rgba(184, 184, 184, 0.5)",
  BORDER_COLOR: "#EFEFEF",
  DEVICE_WIDTH: width,
  DEVICE_HEIGHT: height,
}
