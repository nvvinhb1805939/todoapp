import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar, Badge, Collapse, Container, IconButton, List, Stack } from '@mui/material';
import React, { useState } from 'react';
import AVT from '../../assets/img/avt.png';
import '../../sass/_variables.scss';
import ItemButton from '../ItemButton';
import Logo from '../Logo';
import Search from '../Search';
import './Header.scss';

Header.propTypes = {};

function Header(props) {
  const [isCollapse, setIsCollapse] = useState(true);
  const handleCollapseClick = () => {
    setIsCollapse(!isCollapse);
  };
  return (
    <header className='header'>
      <Container>
        <Stack direction='row' justifyContent='space-between' alignItems='center' spacing='30px'>
          <Logo />
          <Search />
          <Stack className='header__user' direction='row' alignItems='center' spacing={2}>
            <IconButton>
              <Badge color='secondary' variant='dot'>
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            <List className='header__dropdown'>
              <ItemButton isAvatar={true} onCollapseClick={handleCollapseClick}>
                <Avatar alt='avt' src={AVT} />
              </ItemButton>
              <Collapse className='header__collapse' in={!isCollapse}>
                <List>
                  <ItemButton primary='Profile' onCollapseClick={handleCollapseClick}>
                    <AccountCircleIcon />
                  </ItemButton>
                  <ItemButton primary='Setting' onCollapseClick={handleCollapseClick}>
                    <SettingsIcon />
                  </ItemButton>
                  <ItemButton primary='Logout' onCollapseClick={handleCollapseClick}>
                    <PowerSettingsNewIcon />
                  </ItemButton>
                </List>
              </Collapse>
            </List>
          </Stack>
        </Stack>
      </Container>
    </header>
  );
}

export default Header;
