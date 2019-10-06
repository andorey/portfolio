import React from 'react';
import styles from './Footer.module.css'

function Footer() {
	return (
		<div className={styles.header}>
			<div className={styles.block}>
				<div>
					Andorey Rich
				</div>
				<div className={styles.contacts}>
					<div> </div>
					<div> </div>
					<div> </div>
					<div> </div>
				</div>
				<div>
					© 2019 All rights reserved.
				</div>
			</div>
		</div>
	);
}

export default Footer;
