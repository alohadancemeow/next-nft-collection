import React from 'react'
import Link from 'next/link'

import Button from '../Button'
import {
  Section,
  NavBar,
  Logo,
  Menu,
  MenuItem
} from './styles'

const Nav = () => {
  return (
    <Section>
      <NavBar>
        <Link href="/">
          <a>
            <Logo>A.</Logo>
          </a>
        </Link>

        <div>
          <Menu>
            <MenuItem>home</MenuItem>
            <MenuItem>about</MenuItem>
            <MenuItem>roadmap</MenuItem>
            <MenuItem>showcase</MenuItem>
            <MenuItem>team</MenuItem>
            <MenuItem>faq</MenuItem>
          </Menu>
        </div>
        <Button text='Conect wallet' link='/' />
      </NavBar>
    </Section>
  )
}

export default Nav