import React from 'react'
import { Sketch } from 'react-p5'

export default function SketchPage() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef)
  }

  const draw = p5 => {
    p5.background(255, 255, 255)
    p5.fill(0, 0, 255)
    p5.circle(p5.width / 2, p5.height / 2, 50)
  }

  return <Sketch setup={setup} draw={draw} />
}
