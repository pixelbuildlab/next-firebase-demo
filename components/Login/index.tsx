'use client'
import { useTheme } from 'next-themes'
import React from 'react'

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email:', email)
    console.log('Password:', password)
  }
  const { theme, setTheme } = useTheme()
  console.log(theme, 'theme')

  return <></>
}

export default Login
