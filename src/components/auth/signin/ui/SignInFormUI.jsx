import '../styles/SignIn.css'

export default function SignInFormUI({ handleUserEmail, handleUserPass, onClickCallback }) {
	return (
		<div className='SignIn__Card'>
			<div className='SignIn__inputGroup'>
				<span className='SignIn__formTitle'>
					Take into yout account
				</span>

				<span className='SignIn__inputLine'>
					<label className='SignIn__label'>{"  "}Email</label>
					<input type='email' placeholder='doe@example.com' className='SignIn__input' onChange={handleUserEmail} />
				</span>

				<span className='SignIn__inputLine'>
					<label className='SignIn__label'>{"  "}Password</label>
					<input type='password' placeholder='S3CURE@PASSWORD' className='SignIn__input' onChange={handleUserPass} />
				</span>

				<span className='SignIn__inputLine'>
					<label className='SignIn__label'>{"  "}Repeat your password</label>
					<input type='password' placeholder='S3CURE@PASSWORD' className='SignIn__input' />
				</span>

				<span className='SignIn__inputLine'>
					<button 
						type='button'
						className='SignIn__formBtn'
						onClick={onClickCallback}
					>
						crear cuenta
					</button>
				</span>

			</div>
		</div>
	)
}