import React from 'react'

export const Footer = () => {
    let footerstyle = {
        position: "relative",
        top: "20vh",
        width: "100%"
    }
  return (
    <footer className = "bg-dark text-light py-3 text-center" style = {footerstyle}>
        <p>
        Copyright &copy; MyTodoList.com
        </p>
    </footer>
  )
}

export default Footer
