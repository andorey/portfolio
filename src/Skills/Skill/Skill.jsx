import React from 'react';
import styles from './Skill.module.css'

function Skill() {
	return (
		<div className={styles.skill}>
			<div className={styles.icon}> </div>
			<span className={styles.skillTitle}>React</span>
			<span className={styles.skillDescription}>Detailed skill description</span>
		</div>
	);
}

export default Skill;
