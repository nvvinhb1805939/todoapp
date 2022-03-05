import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';

import {
  Avatar,
  Badge,
  Box,
  Button,
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../sass/_variables.scss';
import './Header.scss';
import AVT from '../../assets/img/avt.png';

Header.propTypes = {};

function Header(props) {
  const [isCollapse, setIsCollapse] = useState(true);
  const handleCollapseClick = () => {
    setIsCollapse(!isCollapse);
  };
  return (
    <header>
      <Stack direction='row' justifyContent='space-between' alignItems='center' spacing='30px'>
        <Link className='header__logo' to='/'>
          .todoapp
        </Link>
        <Box className='header__search'>
          <form className='header__form' action=''>
            <input className='header__input' type='search' name='search' id='search' placeholder='Search' />
            <button className='header__search-btn flex flex--center' type='submit'>
              <SearchIcon fontSize='large' />
            </button>
          </form>
        </Box>
        <Stack className='header__user' direction='row' alignItems='center' spacing={1}>
          <IconButton>
            <Badge color='success' variant='dot'>
              <NotificationsNoneIcon fontSize='large' />
            </Badge>
          </IconButton>
          <List className='header__dropdown'>
            <ListItemButton onClick={handleCollapseClick}>
              <ListItemText disableTypography primary='Nguyễn Văn Vinh' />
              <ListItemIcon className='header__icon header__icon--left' sx={{ minWidth: 'unset' }}>
                {isCollapse ? <KeyboardArrowDownIcon fontSize='large' /> : <KeyboardArrowUpIcon fontSize='large' />}
              </ListItemIcon>
            </ListItemButton>
            <Collapse className='header__collapse' in={!isCollapse}>
              <List>
                <ListItemButton>
                  <ListItemIcon className='header__icon header__icon--right' sx={{ minWidth: 'unset' }}>
                    <AccountCircleIcon fontSize='large' />
                  </ListItemIcon>
                  <ListItemText disableTypography primary='Profile' />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon className='header__icon header__icon--right' sx={{ minWidth: 'unset' }}>
                    <SettingsIcon fontSize='large' />
                  </ListItemIcon>
                  <ListItemText disableTypography primary='Setting' />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon className='header__icon header__icon--right' sx={{ minWidth: 'unset' }}>
                    <PowerSettingsNewIcon fontSize='large' />
                  </ListItemIcon>
                  <ListItemText disableTypography primary='Logout' />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <Button>
            <Avatar alt='avt' src={AVT} />
          </Button>
        </Stack>
      </Stack>
    </header>
  );
}

export default Header;
