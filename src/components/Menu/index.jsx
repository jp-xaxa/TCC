import { Link, useNavigate } from "react-router-dom"

import {
  BiHome,
  BiGridAlt,
  BiFile,
  BiClipboard,
  BiLogOut,
} from "react-icons/bi"
import { FiX } from "react-icons/fi"

import { Container, Nav, Profile, Close } from "./styles"
import { ButtonText } from "../../components/ButtonText"
import Logo from "../../assets/logo.png"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Menu({ menuIsOpen, onCloseMenu }) {
  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  function handleProfile() {
    navigate("/profile")
  }

  const avatarUrl = avatarPlaceholder

  return (
    <Container data-menu-is-open={menuIsOpen}>
      {menuIsOpen && (
        <Close onClick={onCloseMenu}>
          <FiX />
        </Close>
      )}

      <img src={Logo} alt="Logo do EasyMarket" />

      <Nav>
        <ul>
          <li>
            <Link to="/dashboard">
              <BiGridAlt /> Dashboard
            </Link>
          </li>
        </ul>
      </Nav>

      <Profile>
        <img src={avatarUrl} alt="Foto do usuário"/>

        <div>
          <ButtonText title="Marcos" />
          <ButtonText title="sair" icon={BiLogOut} />
        </div>
      </Profile>
    </Container>
  )
}
