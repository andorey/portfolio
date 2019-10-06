import React from 'react';
import styles from './Projects.module.css'

function Projects() {
	return (
		<div className={styles.header}>
			<div className={styles.block}>
				<div className={styles.hat}>
					My Skills
				</div>
				<div className={styles.second}>
					<div className={styles.left}>
						<div className={styles.leftUp}>
							...
						</div>
						<div className={styles.leftDown}>
							...
						</div>
					</div>
					<div className={styles.right}>
						<div className={styles.rightUp}>
							picture
							<button className={styles.button}>
								Look At
							</button>
						</div>
						<div className={styles.rightDown}>
							The Project Name
							<div className={styles.rightDownDiv}>
								Shot Description
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
