// import { PropTypes } from 'prop-types';
export const Filter = () => {
    return (
        <div className="">
            <label htmlFor="name" className="">
                <p>Find contacts by name</p>
            </label>
            <input
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </div>      
    );
  };
