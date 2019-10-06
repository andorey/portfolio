import React from 'react';
import styles from './Skills.module.css'

function Skills() {
	return (
		<div className={styles.header}>
			<div className={styles.block}>
				<div className={styles.hat}>
					My Skills
				</div>
				<div className={styles.third}>
					<div className={styles.one}></div>
					<div className={styles.two}>
						<div className={styles.twoUp}>
							up
						</div>
						<div className={styles.twoDown}>
							down
						</div>
					</div>
					<div className={styles.three}>
						<div className={styles.threeUp}>
							<div className={styles.threeUpDiv}>
								up-up
							</div>
							<button className={styles.button}>React</button>
						</div>
						<div className={styles.threeDown}>
							Detailed <br/> skill <br/> description
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
