import styled from "styled-components";

export const Card = styled.div`
    max-width: 280px;
    min-width: 220px;
    max-height: 300px;
    width: 30%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 15px;
    margin: 20px;
    border-radius: 20px;
    color: var(--gray);
    background-color: var(--white-gray);
    transition: 0.2s ease-in-out;

    h3 {
        width: 100%;
        text-align: center;
        font-size: 25px;
    }

    p {
        font-size: 18px;
    }

    small {
        font-size: 16px;
        max-height: 60px;
        overflow: hidden;
        text-align: justify;
        line-height: 20px;

        :before {
            content: "...";
            position: absolute;
            right: 0px;
            bottom: 0;
            background-color: transparent;
            padding: 0 0px 0 0.25em;
        }
    }

    :hover {
        box-shadow: 0px 0px 15px 3px rgba(21, 21, 25, 0.5);
    }
`;

export const SectionAll = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 33px;
        height: 100px;
        margin-top: 20px;
    }
`;

export const DivAll = styled.div`
    max-width: 1200px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: flex-start;

    .h2--brand {
        color: var(--blue-1);
        font-size: 40px;
        margin: 50px;
        transition: 0.2s ease-in-out;
        cursor: pointer;

        :hover {
            opacity: 0.75;
        }
    }
`;

export const SectionModal = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: rgb(0, 0, 0, 0.5);
`;

export const DivModal = styled.div`
    width: 93%;
    max-width: 369px;
    height: 274.34px;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--blue-1);

    @media (min-width: 768px) {
        height: 342px;
    }
`;

export const HeaderModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0px 18px;
    height: 40.11px;
    background-color: var(--gray);
    border-radius: 4px 4px 0 0;

    h4 {
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 24px;
        color: var(--white);
    }

    @media (min-width: 768px) {
        height: 50px;
    }
`;

export const SectionFilters = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 150px;

    div {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 17px;
        background-color: var(--blue-2);
        color: var(--white);
        border-radius: 10px;
        font-size: 14px;
        line-height: 28px;
        font-weight: 700;
        border: 2px solid var(--blue-2);

        :hover {
        }
    }

    select {
        width: 120px;
        height: 40px;
        background-color: var(--blue-1);
        border: 1.5px solid var(--blue-1);
        border-radius: 10px;
        font-weight: 700;
        color: var(--white);
        padding-left: 7px;

        :focus {
            border: 1.5px solid var(--white);
        }
    }

    input {
        width: 150px;
        height: 40px;
        background-color: var(--blue-1);
        border: 1.5px solid var(--blue-1);
        border-radius: 10px;
        color: var(--white);
        padding-left: 7px;
        font-weight: 700;

        :focus {
            border: 1.5px solid var(--white);
        }

        :focus > ::placeholder {
            color: var(--white-gray);
        }

        ::placeholder {
            color: var(--white);
        }
    }

    @media screen and (min-width: 600px) {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        height: 100px;

        div {
            width: 50%;
        }
    }
`;
