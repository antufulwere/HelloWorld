import React from "react"
import ReactDom from "react-dom"
import Head from "./head"
import Butoon from "./button"
ReactDom.render(
  <div>
    <Head />
    <Butoon btntext="sum"/>
    <Butoon btntext="sub"/>
    <Butoon btntext="mul"/>
    <Butoon btntext="div"/>
    <Butoon btntext="rend"/>


  </div>
  ,document.getElementById("root")
)