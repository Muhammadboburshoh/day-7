import {useState, useEffect} from "react"
import "./login.css"

function Login () {

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const [disabled, setDisabled] = useState(true)

	const onSubmit = evt => {
		evt.preventDefault()
	}

	useEffect(() => {
		setDisabled(!(username.length > 2 && password.length > 5))
	}, [username, password])


	return (
			<>
				<div id="login">

					<form onSubmit={onSubmit} action="https://echo.htmlacademy.ru">
						<input 
						id="username"
						type="text"
						placeholder="Uchtagacha belgi kiriting"
						onChange={evt => setUsername(evt.target.value)}
						/>

						<input 
						id="password"
						placeholder="Oltitagacha belgi kiriting"
						type="password"
						onChange={evt => {
							setPassword(evt.target.value)
						}}
						/>

						<button disabled={disabled}>Send</button>
					</form>
				</div>
			</>
	)
}
export default Login