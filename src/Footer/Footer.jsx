import React from 'react';
import styles from './Footer.module.css'

function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.block}>
				<h3>
					Andorey Rich
				</h3>
				<div className={styles.contacts}>
					<nav> </nav>
					<nav> </nav>
					<nav> </nav>
					<nav> </nav>
				</div>
				<h4>
					© 2019 All rights reserved.
				</h4>
			</div>
		</div>
	);
}

export default Footer;
