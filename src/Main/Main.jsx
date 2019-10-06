import React from 'react';
import styles from './Main.module.css'

function Main() {
	return (
		<div className={styles.header}>
			<div className={styles.block}>
				<div className={styles.greeting}>
					<span>Hello!</span>
					<span>My name's Andorey Rich</span>
					<span>I'm front-end Developer</span>
				</div>
				<div className={styles.photo}> </div>
			</div>
		</div>
	);
}

export default Main;
