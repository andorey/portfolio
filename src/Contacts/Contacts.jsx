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
					<div>
						<input type="text" placeholder={'Name'}/>
					</div>
					<div>
						<input type="email" placeholder={'E-mail:'}/>
					</div>
					<div>
						<textarea name="" id=""> </textarea>
					</div>
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
