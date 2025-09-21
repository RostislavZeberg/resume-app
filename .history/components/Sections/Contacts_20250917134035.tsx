import React from 'react';
import Icon from '../UI/Icon';
import styles from '../../styles/sections/contacts.module.scss';

const Contacts: React.FC = () => {
  const contacts = [
    { icon: 'email', text: 'zeberg@bk.ru', href: 'mailto:zeberg@bk.ru' },
    { icon: 'phone', text: '+7(960)-552-4171', href: 'tel:+79605524171' },
    { icon: 'telegram', text: '@zeberg_jaguar', href: 'https://t.me/zeberg_jaguar' },
    { icon: 'github', text: 'GitHub', href: 'https://github.com/RostislavZeberg?tab=repositories' }
  ];

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