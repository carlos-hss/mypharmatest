import styled from "styled-components";

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    min-height: 70px;
    background-color: var(--blue-2);
    box-shadow: 0px 0px 15px 3px rgba(0, 165, 254, 0.3);
    border-radius: 0 0 5px 5px;

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
