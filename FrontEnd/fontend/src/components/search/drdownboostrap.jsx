// import Dropdown from 'react-bootstrap/Dropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Pickrooms from './pickrooms';

function DropdownItemTagsExample() {
  return (
    <DropdownButton id="dropdown-item-button" title="room|person">

      <Pickrooms/>
  
    </DropdownButton>
  );
}

export default DropdownItemTagsExample;