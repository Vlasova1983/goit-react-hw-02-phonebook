// import { PropTypes } from 'prop-types';
import styles  from '../Filter/Filter.module.css';


export const Filter = ({onFilter}) => {

    const handleFilter = event =>{
        const nameFilter = event.target.value.toLowerCase()
        console.log(nameFilter);
        onFilter(nameFilter);
    };

    return (
        <div className={styles.filter}>
            <label htmlFor="filter" className="">
                <p>Find contacts by name</p>
            </label>
            <input
                id="filter"
                type="text"
                name="filter"
                onChange={handleFilter}               
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </div>      
    );
  };
