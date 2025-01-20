import Dropdown from 'react-bootstrap/Dropdown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function AdminAccountDropDownList() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <AccountCircleIcon/> Account
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="">Admin Info</Dropdown.Item>
        <Dropdown.Item href="">Update Admin info</Dropdown.Item>
        <Dropdown.Item href="http://localhost:3000/AdminLogin">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AdminAccountDropDownList;