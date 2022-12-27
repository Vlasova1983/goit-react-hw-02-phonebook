 import { PropTypes } from 'prop-types';
 import styles  from '../ContactForm/ContactForm.module.css';

export const  ContactForm = ({onSubmit})=> {  
  return (
    <form className="" onSubmit={onSubmit}>
      <div className="">
        <label htmlFor="name" className="">
          <p>Name</p>
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className="">
        <label htmlFor="name" className="">
          <p>Number</p>
        </label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>               

      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
      
  );
}

ContactForm.propTypes = {  
  onSubmit:PropTypes.func,
}