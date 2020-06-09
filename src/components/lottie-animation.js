import React from "react";
import Lottie from "react-lottie";

export default class Icon extends React.Component {
 render() {
  return (
   <Lottie options={{
    loop: true,
    autoplay: true,
    animationData: this.props.animationContent,
    rendererSettings: {
     preserveAspectRatio: "xMidYMid slice"
    }
   }}
   height={250}
   width={250}
   />
  );
 }
}