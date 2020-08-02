import React, { useState } from 'react';

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form autoComplete="off" onSubmit={event => event.preventDefault()}>
      <label>Email</label>
      <input
        name="email"
        value={email}
        type="text"
        placeholder="Please enter your email"
        onChange={event => setEmail(event.target.value)}
      />
      <label>Password</label>
      <input
        name="password"
        value={password}
        type="text"
        placeholder="Please enter your password"
        onChange={event => setPassword(event.target.value)}
      />
    </form>
  )
}