import styled from "styled-components";

export const SectionLogin = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--blue-2);

    img {
        width: 250px;
        margin-bottom: 20px;
    }
`;

export const Form = styled.form`
    width: 90%;
    max-width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--blue-3);
    border: 3px solid var(--blue-2);
    border-radius: 20px;

    button {
        color: var(--white);
        padding: 0.7em 1.7em;
        font-size: 18px;
        font-weight: 700;
        border-radius: 0.5em;
        background: var(--blue-2);
        border: 2px solid var(--blue-2);
        transition: all 0.2s ease-in-out;
        box-shadow: 6px 6px 12px var(--blue-3), -6px -6px 12px var(--blue-3);

        :hover {
            color: var(--blue-2);
            background-color: transparent;
        }
    }
`;

export const DivInputs = styled.div`
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    p {
        width: 100%;
        text-align: left;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: var(--gray);
        transition: 0.2s ease-in-out;

        :hover {
            color: var(--blue-2);
        }
    }

    input {
        :focus {
            color: var(--gray);
            border: var(--gray);
        }
    }
`;

export const Message = styled.h2`
    font-family: "Inter";
    font-size: 20px;
    text-align: center;
    color: ${({ color }) => color};
`;
