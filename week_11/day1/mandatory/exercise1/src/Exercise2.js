import React from 'react';

export default function Second() {
  const JSXElement = <h1>I Love JSX!</h1>;
  const sum = '5 + 5'
  return (
    <>
      {JSXElement}
      <p> React is {sum} times better with JSX</p>
    </>
  )

}