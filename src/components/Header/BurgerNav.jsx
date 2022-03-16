import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
    list-style: none;
    flex-flow: column nowrap;
    background-color: rgb(39, 63, 138, 0.95);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s linear;
    z-index: 19;
`;

const Li = styled.li`
    padding: 18px 20px;
    font-size: 23px;
    color: var(--white);
`;

const BurgerNav = ({ open }) => {
    return (
        <Nav open={open}>
            <Link to="/marcas">
                <Li>Marcas</Li>
            </Link>
            <Link to="/">
                <Li>Categorias</Li>
            </Link>
            <Link to="/produtos">
                <Li>Produtos</Li>
            </Link>
            <Link to="/login">
                <Li>Login</Li>
            </Link>
        </Nav>
    );
};

export default BurgerNav;
