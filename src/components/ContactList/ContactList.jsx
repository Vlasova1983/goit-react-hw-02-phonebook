import { PropTypes } from 'prop-types';

export const ContactList = ({options}) => {
    return (
        <ul className="">
            {options.map(key=>( 
                <li key={key.id}>{key.name}</li>
            ))}            
        </ul>      
    );
  };

ContactList.propTypes = {       
    options: PropTypes.arrayOf( PropTypes.shape())
}
    