import React from 'react';
import styles from './RemoteJob.module.css'

function RemoteJob() {
	return (
		<div className={styles.header}>
			<div className={styles.block}>
				<h3>
					I Will Consider Options For Remote Work
				</h3>
				<div>
					<button className={styles.button}>
						Hire Me
					</button>
				</div>
			</div>
		</div>
	);
}

export default RemoteJob;
