import React from 'react';
import styles from './Skills.module.css'
import Skill from "./Skill/Skill";

function Skills() {
	return (
		<div className={styles.header}>
			<div className={styles.block}>
				<div className={styles.hat}>
					My Skills
				</div>

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
