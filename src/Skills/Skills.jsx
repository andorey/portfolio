import React from 'react';
import styles from './Skills.module.css'
import Skill from "./Skill/Skill";

function Skills() {
	return (
		<div className={styles.header}>
			<div className={styles.block}>
				<h2 className={styles.hat}>
					My Skills
					<div>_____</div>
				</h2>
				<div className={styles.skills}>
					<Skill />
					<Skill />
					<Skill />
				</div>
			</div>
		</div>
	);
}

export default Skills;
