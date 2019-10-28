import React from 'react';
import styles from './Main.module.css'

function Main() {
	return (
		<div className={styles.header}>
			<div className={styles.block}>
				<div className={styles.greeting}>
					<span>Hello!</span>
					<span className={styles.name}>My name's Andorey Rich</span>
					<h1>I'm front-end Developer</h1>
				</div>
				<div className={styles.photo}>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbHbL0K3ifXTZhDFa_LvDgNTu7RZsLugZcvA9tjfR9cqpMlwBf" alt=""/>
				</div>
			</div>
		</div>
	);
}

export default Main;
