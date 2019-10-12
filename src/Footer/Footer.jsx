import React from 'react';
import styles from './Footer.module.css'

function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.block}>
				<div>
					Andorey Rich
				</div>
				<div className={styles.contacts}>
					<nav> </nav>
					<nav> </nav>
					<nav> </nav>
					<nav> </nav>
				</div>
				<div>
					© 2019 All rights reserved.
				</div>
			</div>
		</div>
	);
}

export default Footer;
