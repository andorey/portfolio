import React from 'react';
import styles from './Projects.module.css'
import Project from "./Project/Project";

function Projects() {
	return (
		<div className={styles.header}>
			<div className={styles.block}>
				<h2 className={styles.hat}>
					My Projects
					<div>_____</div>
				</h2>
				<div className={styles.projects}>
					<Project />
					<Project />
				</div>
			</div>
		</div>
	);
}

export default Projects;
