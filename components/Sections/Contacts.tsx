import React from 'react';
import Icon from '../UI/Icon';
import styles from '../../styles/sections/contacts.module.scss';
import { contacts } from '@/info/contacts';

const Contacts: React.FC = () => {

  return (
    <section id="contacts" className={styles.contacts}>
      <div className="container">
        <h2>Контакты</h2>
        <div className={styles.contactsGrid}>
          {contacts.map((contact, index) => (
            <a 
              key={index} 
              href={contact.href} 
              className={styles.contactItem}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name={contact.icon} className={styles.contactIcon} />
              <span>{contact.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;