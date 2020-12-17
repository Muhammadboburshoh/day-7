import { useState, useEffect } from 'react'

function Login () {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState("")
	const [disabled, setDisabled] = useState(true)

	const onSubmit = event => {

    event.preventDefault()

    console.log('Submitted', username)
    
	}

	useEffect(() => {

		setDisabled(!(username.length > 2 && password.length > 5))
		// setDisabled(username.length > 2 ? false : true)
	
	}, [username, password])

	return (
		<>
			<div id="login">

				<form onSubmit={onSubmit}>
					<div>
						<label htmlFor="username">Username</label>
						<input
							id="username"
							type="text"
							placeholder="Username"
							autoComplete="off"
							spellCheck={false}
							onChange={e => setUsername(e.target.value)}
						/>
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              type="text"
              placeholder="Password input"
              autoComplete="off"
              spellCheck={false}
              onChange={e => setPassword(e.target.value)}
              />
					</div>
					<div>
						<button disabled={disabled}>
							<span>Login</span>
						</button>
					</div>
				</form>

			</div>
		</>
	)
}

export default Login