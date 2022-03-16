import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavegationBar = styled.nav`
    display: none;
    width: 55%;
    max-width: 450px;
    margin-right: 50px;

    @media (min-width: 769px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1rem;
    }

    @media (min-width: 1024px) {
        font-size: 1.25rem;
    }
`;

const Li = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    color: var(--white);
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    :hover {
        color: var(--blue-1);
    }
`;

const NavBar = () => {
    return (
        <>
            <NavegationBar>
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
            </NavegationBar>
        </>
    );
};

export default NavBar;
