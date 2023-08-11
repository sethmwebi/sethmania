import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../../components/button/Button"

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image
					src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					fill={true}
					className={styles.img}
					alt=""
				/>
				<div className={styles.imgText}>
					<h1 className={styles.imgTitle}>Digital Storytellers</h1>
					<h2 className={styles.imgDesc}>
						Handcrafting award winning digital experiences.
					</h2>
				</div>
			</div>
			<div className={styles.textContainer}>
				<div className={styles.item}>
					<h1 className={styles.title}>Who we are?</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod iste
						similique nihil. Ex, delectus tempora molestiae odit blanditiis amet
						minima deserunt nam accusantium ad eum unde quidem provident
						architecto expedita minus error earum temporibus repellat est,
						dignissimos aspernatur, optio beatae pariatur.
						<br /> <br /> Doloremque eum aperiam, temporibus fuga soluta quod
						officiis aspernatur eius corrupti aut, natus expedita tempora
						numquam sequi quam quis.
					</p>
				</div>
				<div className={styles.item}>
					<h1 className={styles.title}>What we do?</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor, sit amet consectetur adipisicing, elit.
						Laboriosam minus cum minima atque, fuga voluptatem eaque, non facere
						nihil fugiat vitae incidunt magni numquam quasi maxime tempora odit,
						eligendi, beatae. 
						<br />
						<br />
						<br />
						- Dynamic Websites
						<br /><br />
						- Fast and Handy
						<br /><br />
						- Mobile apps
					</p>
					<Button url="/contact" text="Contact" />
				</div>
			</div>
		</div>
	);
};

export default About;
