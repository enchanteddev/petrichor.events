<script lang="ts">
</script>

<div class="form-container">
	<div class="form">
		<h2>Login to <span id="Petrichor">Petrichor</span></h2>
		<form action="">
			<div>
				<input type="email" name="email" id="email" placeholder="Email" required />
			</div>
			<div>
				<input type="password" id="password" name="password" placeholder="Password" required />
			</div>
			<div>
				<button id="login">Login</button>
				<a id="register" href="/register">First Time? Register Here</a>
			</div>
		</form>
	</div>
	<div class="image" />
</div>
<div class="blank" />

<style>
	h2 {
		font-size: 300%;
		font-weight: normal;
		margin: 5% 20%;
	}
	input {
		padding: 2%;
		margin: 2% 20%;
		font-size: 150%;
		border-radius: 10rem;
		width: 55%;
		background-color: #40413e;
		border: none;
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
	#login {
		font-size: 2rem;
		margin: 2% 5% 2% 20%;
		border-radius: 10rem;
		padding: 2% 7%;
		background-color: #232423;
		color: white;
		font-weight: bold;
		border: none;
	}
	#register {
		color: mediumslateblue;
	}
	.blank {
		background-color: black;
		width: 100%;
		height: 100px;
	}
</style>
