<script lang="ts">
	function validate() {
		const inst = document.querySelector('#inst-type');
		const instName = document.querySelector('#inst-name');
		const stream = document.querySelector('#stream');
		const grade = document.querySelector('#grade');
		const year = document.querySelector('#year-of-graduation');
		const phone = document.querySelector('#phone-number');
		const phoneWarn = document.querySelector('#phone-warn');
		const instWarn = document.querySelector('#inst-type-warn');
		const instNameWarn = document.querySelector('#inst-name-warn');
		const gradeWarn = document.querySelector('#grade-warn');
		const yogWarn = document.querySelector('#yog-warn');
		const streamWarn = document.querySelector('#stream-warn');
		const pwd = document.querySelector('#password');
		const pwdWarn = document.querySelector('#pwd-warn');

		phoneWarn?.classList.add('hide');
		instWarn?.classList.add('hide');
		instNameWarn?.classList.add('hide');
		gradeWarn?.classList.add('hide');
		yogWarn?.classList.add('hide');
		streamWarn?.classList.add('hide');
		pwdWarn?.classList.add('hide');

		if (phone?.value.length != 10) {
			phoneWarn?.classList.remove('hide');
		} else if (inst?.value == '') {
			instWarn?.classList.remove('hide');
		} else if (!instName?.classList.contains('hide') && instName?.value == '') {
			instNameWarn?.classList.remove('hide');
		} else if (!grade?.classList.contains('hide') && grade?.value == '') {
			gradeWarn?.classList.remove('hide');
		} else if (!stream?.classList.contains('hide') && stream?.value == '') {
			streamWarn?.classList.remove('hide');
		} else if (!year?.classList.contains('hide') && year?.value == '') {
			yogWarn?.classList.remove('hide');
		} else if (pwd?.value.length < 8) {
			pwdWarn?.classList.remove('hide');
		}
	}
	function setAptFields() {
		const inst = document.querySelector('#inst-type');
		const instName = document.querySelector('#inst-name');
		const stream = document.querySelector('#stream');
		const grade = document.querySelector('#grade');
		const year = document.querySelector('#year-of-graduation');
		if (inst?.value == '') {
			year?.classList.add('hide');
			stream?.classList.add('hide');
			instName?.classList.add('hide');
			grade?.classList.add('hide');
		} else if (inst?.value == 'college') {
			year?.classList.remove('hide');
			stream?.classList.remove('hide');
			instName?.classList.remove('hide');
			grade?.classList.add('hide');
		} else if (inst?.value == 'school') {
			year?.classList.add('hide');
			stream?.classList.add('hide');
			instName?.classList.remove('hide');
			grade?.classList.remove('hide');
		} else {
			year?.classList.add('hide');
			stream?.classList.add('hide');
			instName?.classList.add('hide');
			grade?.classList.add('hide');
		}
	}
</script>

<div class="form-container">
	<div class="blank2" />
	<div class="form image2" on:change={validate}>
		<h2>Register for <span id="Petrichor">Petrichor</span></h2>
		<form action="">
			<div>
				<input type="text" name="name" id="name" placeholder="Name" required />
				<input type="tel" name="phone-number" id="phone-number" placeholder="Phone No." required />
			</div>
			<div class="warning hide" id="phone-warn">Enter a valid 10 digit phone number</div>
			<div>
				<select name="inst-type" id="inst-type" on:change={setAptFields}>
					<option value="">--Currently In--</option>
					<option value="school">School</option>
					<option value="college">College</option>
					<option value="neither">None Of The Above</option>
				</select>
				<input
					type="text"
					name="inst-name"
					id="inst-name"
					placeholder="Name of Institution"
					class="hide"
				/>
			</div>
			<div class="warning hide" id="inst-type-warn">Select an option</div>
			<div class="warning hide" id="inst-name-warn">Enter a name</div>
			<div class="warning hide" id="stream-warn">This field is mandatory</div>
			<div>
				<input
					type="text"
					name="stream"
					id="stream"
					class="hide"
					placeholder="Degree enrolled in"
				/>
				<select name="year-of-graduation" class="hide" id="year-of-graduation">
					<option value="">Year of Graduation</option>
					<option value="2024">2024</option>
					<option value="2025">2025</option>
					<option value="2026">2026</option>
					<option value="2027">2027</option>
					<option value="2028">2028</option>
					<option value="2029">2029</option>
					<option value="2030">2030</option>
				</select>
			</div>
			<div class="warning hide" id="yog-warn">This field is mandatory</div>
			<div>
				<select name="grade" class="hide" id="grade">
					<option value="">Grade</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
					<option value="11">11</option>
					<option value="12">12</option>
				</select>
			</div>
			<div class="warning hide" id="grade-warn">This field is mandatory</div>
			<div>
				<input type="email" name="email" id="email" placeholder="Email" required />
			</div>
			<div>
				<input type="password" id="password" name="password" placeholder="Password" required />
			</div>
			<div class="warning hide" id="pwd-warn">Password must be atleast 8 characters long</div>
			<div>
				<button id="register">Register</button>
				<a id="login" href="/login">Already Registered? Login here</a>
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
			margin: 2% 10%;
		}
		select,
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
		#stream {
			margin: 1% 1% 1% 10%;
			width: 29%;
		}
		#inst-type,
		#grade {
			margin: 1% 1% 1% 10%;
			width: 33%;
		}
		#inst-name,
		#phone-number {
			margin: 1% 1%;
			width: 30%;
		}
		#year-of-graduation {
			margin: 1% 1%;
			width: 34%;
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
		.blank {
			background-color: black;
			width: 100%;
			height: 100px;
		}
		.hide {
			display: none;
		}
		.warning {
			color: red;
		}
		#inst-type-warn {
			margin-left: 18%;
		}
		#inst-name-warn {
			margin-left: 55%;
		}
		#phone-warn {
			margin-left: 45%;
		}
		#stream-warn {
			margin-left: 15%;
		}
		#yog-warn {
			margin-left: 50%;
		}
		#grade-warn {
			margin-left: 15%;
		}
		#pwd-warn {
			margin-left: 20%;
		}
	}
	@media (max-width: 500px) {
		h2 {
			font-size: 300%;
			font-weight: normal;
			margin: 20% 15% 5%;
		}
		select,
		input {
			padding: 2%;
			margin: 2% 6%;
			font-size: 150%;
			border-radius: 10rem;
			width: 85%;
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
			height: 1000px;
			background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
				url('https://i.pinimg.com/1200x/c2/55/30/c25530ab671a4098de5598e047a9a985.jpg');
		}
		.image {
			display: none;
		}
		#register {
			font-size: 2rem;
			margin: 2% 0% 2% 5%;
			border-radius: 10rem;
			padding: 2% 7%;
			background-color: #232423;
			color: white;
			font-weight: bold;
			border: none;
		}
		#login {
			color: mediumslateblue;
			display: inline-block;
			margin: 2% 0 0 30%;
		}
		.blank {
			background-color: black;
			width: 100%;
			height: 100px;
		}
		.hide {
			display: none;
		}
		.warning {
			color: red;
			margin-left: 20%;
		}

		.blank2 {
			background-color: black;
			width: 100%;
			height: 100px;
		}
	}
</style>
