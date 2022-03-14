import styled from "styled-components";

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    min-height: 70px;
    background-color: var(--blue-2);

    img {
        width: 150px;
        margin-left: 30px;
    }

    @media (min-width: 769px) {
        height: 140px;
        min-height: 140px;

        img {
            width: 230px;
            margin-left: 50px;
        }
    }
`;

export default HeaderStyled;
