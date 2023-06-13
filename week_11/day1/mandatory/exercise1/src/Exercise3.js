import React from 'react'

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function Third() {
  return (
    <>
      <h3> {user.firstName} </h3>
      <h3> {user.lastName} </h3>
    </>
  )
}

export default {user, Third}