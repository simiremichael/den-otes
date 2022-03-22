import styled from 'styled-components';

   const MenuContainer = styled.div`
   width: 100%;
   height: 3rem;
   align-items: center;
   display: flex;
   @media only screen and (max-width: 900px) {
    justify-content: center;
    background-color: #040c3e;
   }
   `
   const LogoContainer = styled.div`
   z-index: 1;
   background-color: #040c3e;
   height: 6rem;
   margin: 0 0 0 3rem;
   padding: 1.5rem;
   @media only screen and (max-width: 900px) {
    z-index: 0;
    align-self: center;
    height: 3rem;
    padding: 0;
    margin: 0;
   }
   `
   const Logo = styled.a`
   font-size: 2rem;
   color: #ffffff;
   `

const MenuList2 = styled.div`
@media only screen and (min-width: 801px) {
  display: none;
 }
`

const MenuList1 = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: end;
align-items: center;
margin-left: -15rem;
@media only screen and (max-width: 900px) {
  display: none;
 }
`

const MenuItem = styled.a`
background: rgb(70,97,246);
background: radial-gradient(circle, rgba(70,97,246,1) 0%, rgba(21,71,150,1) 100%);
color: #ffffff;
margin-left: 2rem;
padding: 1px 10px;
border-radius: 5px;
cursor: pointer;
transition: ease-in-out;
:hover {
transform: scale(1.2);
}
`

function NavHeader()  {

  return (
    <MenuContainer>
      <LogoContainer>
      <Logo>LOGO</Logo>
      </LogoContainer>
   <MenuList1>
    <MenuItem>
      Home
    </MenuItem>
    <MenuItem>
      Contact Us
    </MenuItem>
    <MenuItem>
      Register
    </MenuItem>
  </MenuList1> 

  <MenuList2 >

  </MenuList2>
  </MenuContainer>
  )
}

export default NavHeader