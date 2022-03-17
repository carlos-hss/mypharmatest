import styled from "styled-components";

export const Card = styled.div`
    max-width: 280px;
    min-width: 220px;
    height: 300px;
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

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        width: 100%;
    }

    h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        text-align: center;
        font-size: 25px;
        height: 35px;
    }

    p {
        font-size: 18px;
        height: 20px;
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

    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 17px;
        background-color: var(--blue-2);
        color: var(--white);
        border-radius: 10px;
        font-size: 16px;
        line-height: 28px;
        font-weight: 700;
        border: 2px solid var(--blue-2);
        transition: 0.2s ease-in-out;

        :hover {
            color: var(--blue-2);
            background-color: transparent;
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
    width: 95%;
    max-width: 1200px;
    display: flex;
    flex-flow: column wrap;
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

    .h2--category {
        color: var(--blue-1);
        font-size: 40px;
        margin: 50px;
        transition: 0.2s ease-in-out;
        cursor: pointer;

        :hover {
            opacity: 0.75;
        }
    }

    @media screen and (min-width: 769px) {
        flex-flow: row wrap;
    }
`;

export const SectionModal = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgb(0, 0, 0, 0.9);
    z-index: 21;
`;

export const DivModal = styled.div`
    width: 93%;
    max-width: 400px;
    min-height: ${({ height }) => `${height}px`};
    max-height: ${({ height }) => `${height}px`};
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: var(--blue-1);
    padding: 20px;

    h2 {
        font-size: 25px;
        font-weight: 700;
        color: var(--white);
    }

    label {
        width: 100%;
        height: 20px;
        text-align: left;
        font-size: 16px;
        font-weight: 700;
        color: var(--white);
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
        font-size: 16px;
        line-height: 28px;
        font-weight: 700;
        border: 2px solid var(--blue-2);
        transition: 0.2s ease-in-out;

        :hover {
            color: var(--blue-2);
            background-color: transparent;
        }
    }
`;

export const ExitSymbol = styled.div`
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 15px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 20;
    cursor: pointer;

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: var(--white);
        border-radius: 10px;
        transform-origin: 5px;

        :nth-child(1) {
            transform: rotate(45deg);
        }

        :nth-child(2) {
            transform: rotate(-45deg);
        }
    }
`;

export const BodyModal = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: ${({ height }) => `${height}px`};

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 90%;
    }

    .div--buttons {
        flex-direction: row;
        height: 40px;
    }

    input {
        width: 100%;
        max-width: 346px;
        height: 40px;
        border-radius: 5px;
        color: var(--gray);
        padding-left: 10px;
        margin: 5px 0;
        border: 2px solid white;
    }

    select {
        width: 100%;
        max-width: 360px;
        height: 40px;
        border-radius: 5px;
        color: var(--gray);
        padding-left: 10px;
        margin: 5px 0;
        border: 2px solid white;
    }
`;

export const SectionFilters = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    min-height: 120px;
    max-width: 400px;

    div {
        width: 100%;
        height: 50%;
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
        font-size: 16px;
        line-height: 28px;
        font-weight: 700;
        border: 2px solid var(--blue-2);
        transition: 0.2s ease-in-out;

        :hover {
            color: var(--blue-2);
            background-color: transparent;
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
        transition: 0.2s ease-in-out;

        :focus {
            border: 1.5px solid var(--white);
        }
    }

    @media screen and (min-width: 600px) {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        min-height: 100px;
        max-width: 1200px;

        div {
            width: 50%;
            height: 100%;
            max-width: 400px;
        }
    }
`;

export const FormSearch = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .input {
        width: 150px;
        height: 40px;
        background-color: var(--blue-1);
        border: 2px solid var(--blue-1);
        border-radius: 10px;
        color: var(--gray);
        padding-left: 7px;
        font-weight: 700;
        margin-right: 5px;
        transition: 0.2s ease-in-out;

        :focus {
            background-color: transparent;

            ::placeholder {
                color: var(--gray);
            }
        }

        ::placeholder {
            color: var(--white);
        }
    }

    button {
        background-color: var(--blue-1);
        border: 2px solid var(--blue-1);
        border-radius: 50%;
        padding: 10px;

        img {
            width: 13px;
        }
    }
`;

export const DivHome = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 300px;
        transition: 0.3s ease-in-out;

        :hover {
            width: 350px;
        }
    }

    @media screen and (min-width: 769px) {
        img {
            width: 500px;

            :hover {
                width: 550px;
            }
        }
    }
`;

export const CardHome = styled.div`
    width: 300px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--gray);
    background-color: var(--blue-2);
    transition: 0.2s ease-in-out;
    margin: 30px 0;
    border-radius: 10px;

    h2 {
        font-size: 30px;
    }

    :hover {
        box-shadow: 0px 0px 15px 3px rgba(21, 21, 25, 0.5);
    }
`;
