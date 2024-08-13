import { IoMdArrowDown } from "react-icons/io";
import NavBar from "./nav/NavBar";
import NavDropdown from "./nav/NavDropDown";
import NavItem from "./nav/NavItem";

const PopulatedNavBar = () => {
    return (
        <NavBar>
            <NavItem>SPEED</NavItem>
            <NavItem route={`${process.env.NEXTAUTH_URL} + /`} end>Home</NavItem>
            <NavItem dropdown route={`${process.env.NEXTAUTH_URL} + /articles`} >Articles <IoMdArrowDown />
                <NavDropdown>
                    <NavItem route={`${process.env.NEXTAUTH_URL} + /articles`} >View Articles</NavItem>
                    <NavItem route={`${process.env.NEXTAUTH_URL} + /articles/new`} >Submit new</NavItem>
                </NavDropdown>
            </NavItem>
        </NavBar>
    )
}

export default PopulatedNavBar;