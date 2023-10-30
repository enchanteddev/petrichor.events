<script lang="ts">
</script>

<div class="form-container">
	<div class="form">
		<h2>Register for <span id="Petrichor">Petrichor</span></h2>
		<form action="">
			<div>
				<input type="text" name="name" id="name" placeholder="Name" required />
				<input
					type="text"
					name="college-name"
					id="college-name"
					placeholder="College Name"
					required
				/>
			</div>
			<div>
				<input
					type="number"
					name="year-of-study"
					id="year-of-study"
					placeholder="Year Of Study"
					required
				/>
				<input
					type="tel"
					name="phone-number"
					id="phone-number"
					placeholder="Phone No."
					pattern="[0-9]{10}"
					required
				/>
			</div>
			<div>
				<input type="email" name="email" id="email" placeholder="Email" required />
			</div>
			<div>
				<input type="password" id="password" name="password" placeholder="Password" required />
			</div>
			<div>
				<button id="register">Register</button>
				<a id="login" href="/login">Already Registered? Login here</a>
			</div>
		</form>
	</div>
	<div class="image" />
</div>

<style>
	h2 {
		font-size: 300%;
		font-weight: normal;
		margin: 2% 10%;
	}
	input {
		font-size: 150%;
		border-radius: 10rem;
		background-color: #40413e;
		border: none;
		padding: 2%;
		color: white;
	}
	#email,
	#password {
		margin: 1% 10%;
		width: 66%;
	}
	#name,
	#year-of-study {
		margin: 1% 2% 1% 10%;
		width: 28%;
	}
	#phone-number,
	#college-name {
		margin: 1% 2%;
		width: 30%;
	}
	::placeholder {
		color: white;
	}
	#Petrichor {
		color: #910cea;
		font-weight: 600;
	}
	.form-container {
		padding-top: 10%;
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.form {
		width: 50%;
	}
	.image {
		width: 50%;
		height: 500px;
		background-image: url('https://i.pinimg.com/1200x/c2/55/30/c25530ab671a4098de5598e047a9a985.jpg');
	}
	#register {
		font-size: 2rem;
		margin: 1% 2% 1% 10%;
		border-radius: 10rem;
		padding: 2% 7%;
		background-color: #232423;
		color: white;
		font-weight: bold;
		border: none;
	}
	#login {
		color: mediumslateblue;
	}
</style>
