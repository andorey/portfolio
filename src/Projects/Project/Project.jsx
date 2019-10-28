import React from 'react';
import styles from './Project.module.css'

function Project() {
	return (
		<div className={styles.project}>
			<div className={styles.picture}>
				picture
				<span className={styles.projectTitle}>Look At</span>
			</div>
			<span className={styles.projectDescription}>
				The Project Name
				Shot Project Description. Shot-story about project.
			</span>
		</div>
	);
}

export default Project;
