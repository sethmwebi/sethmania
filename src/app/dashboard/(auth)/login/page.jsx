"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"
import styles from "./page.module.css";

const Login = () => {
	const session = useSession()
	const router = useRouter()

	const handleSubmit = async (e) => {
		e.preventDefault();

		const email = e.target[0].value;
		const password = e.target[1].value;
		signIn("credentials", { email, password })
	};

	if (session.status === "loading") {
		return <p>Loading...</p>;
	}

	if (session.status === "authenticated") {
		router.push("/dashboard");
	}

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="email"
					className={styles.input}
					required={true}
				/>
				<input
					type="password"
					placeholder="password"
					className={styles.input}
					required={true}
				/>
				<button className={styles.button}>Login</button>
			</form>
		</div>
	);
};

export default Login;
