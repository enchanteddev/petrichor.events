<script lang="ts">
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import { setToken } from '$lib/index';
	import Loading from '$lib/components/Loading.svelte';

	import { isLogin, userEmail } from '$lib/stores';
	import { API, readToken } from '$lib/index';
	import { goto } from '$app/navigation';

	// export let data: any;

	// console.log($page.url, 'h');

	let loading = false;
	if ($isLogin) {
		loading = true;
		goto('/profile');
	}
</script>

<Loading spinning={loading} />

<div class="form-container">
	<div class="blank2" />
	<div class="form image2">
		<h2>Login to <span id="Petrichor">Petrichor</span></h2>
		<form
			action="?/login"
			method="POST"
			use:enhance={({ form }) => {
				loading = true;
				return async ({ result, update }) => {
					if (result.type == 'success') {
						if (result.data) {
							// @ts-ignore
							setToken(String(result?.data?.response?.token));
							let ans;
							console.log(readToken());
							fetch(API.whoami, {
								method: 'POST',
								headers: {
									Accept: 'application/json',
									'Content-type': 'application/json'
								},
								credentials: 'omit',
								body: JSON.stringify({
									token: readToken()
								})
							})
								.then((res) => res.json())
								.then((res) => {
									loading = false;
									ans = res;
									console.log(res);
									if (ans.user == null || ans.user == undefined) {
										isLogin.set(false);
									} else {
										isLogin.set(true);
										userEmail.set(ans.email);
									}
								});
								goto('/profile');
						} else {
							loading = false;
							alert('Invalid email or password');
							goto(`/login${$page.url.search}`);
						}
					} else {
						loading = false;
						alert('Invalid email or password');
						goto(`/login${$page.url.search}`);
					}
				};
			}}
		>
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
	@media (min-width: 501px) {
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
			color: white;
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
			display: inline-block;
		}
		.blank {
			background-color: black;
			width: 100%;
			height: 100px;
		}
	}
	@media (max-width: 500px) {
		h2 {
			font-size: 300%;
			font-weight: normal;
			margin: 20% 15% 5%;
		}
		input {
			padding: 2%;
			margin: 2% 8%;
			font-size: 150%;
			border-radius: 10rem;
			width: 80%;
			background-color: #40413ebb;
			border: none;
			color: white;
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
			flex-direction: column;
		}
		.form {
			width: 100%;
		}
		.image2 {
			height: 500px;
			background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
				url('https://i.pinimg.com/1200x/c2/55/30/c25530ab671a4098de5598e047a9a985.jpg');
		}
		.image {
			display: none;
		}
		#login {
			font-size: 1.5rem;
			margin: 2% 0% 2% 5%;
			border-radius: 10rem;
			padding: 2% 7%;
			background-color: #232423;
			color: white;
			font-weight: bold;
			border: none;
		}
		#register {
			color: mediumslateblue;
			display: inline-block;
			margin: 2% 0 0 40%;
		}
		.blank {
			background-color: black;
			width: 100%;
			height: 100px;
		}
		.blank2 {
			background-color: black;
			width: 100%;
			height: 100px;
		}
	}
</style>
