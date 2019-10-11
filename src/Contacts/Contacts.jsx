import React from 'react';
import styles from './Contacts.module.css'

function Contacts() {
	return (
		<div className={styles.header}>
			<div className={styles.block}>
				<div>
					CONTACTS
				</div>
				<div className={styles.contacts}>
					<input type="text"/>
					<input type="text"/>
					<textarea name="" id="" > </textarea>
				</div>
				<div>
					<button className={styles.button}>
						Send
					</button>
				</div>
			</div>
		</div>
	);
}

export default Contacts;
