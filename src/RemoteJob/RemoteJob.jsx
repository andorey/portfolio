import React from 'react';
import styles from './RemoteJob.module.css'

function RemoteJob() {
	return (
		<div className={styles.header}>
			<div className={styles.block}>
				<div>
					I Will Consider Options For Remote Work
				</div>
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
