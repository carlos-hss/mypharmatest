import styled from "styled-components";

export const DivName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 93%;
    max-width: 779.73px;
    height: 47%;

    h2 {
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 28px;
        color: var(--grey-0);
    }

    p {
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 22px;
        color: var(--grey-1);
    }

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`;

export const Tech = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 93%;
    max-width: 779.73px;
    height: 72px;

    h3 {
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 18px;
        color: var(--grey-0);
    }
`;

export const HeaderHome = styled(Tech)`
    svg {
        width: 105.53px;
        height: 14.63px;
    }

    button {
        width: 55.49px;
        height: 32px;
    }
`;

export const ButtonPlus = styled.button`
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 4px;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    background-color: var(--grey-3);
    color: var(--grey-0);
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 93%;
    max-width: 779.73px;
    max-height: 416.37px;
    padding: 18px 0;
    background-color: var(--grey-3);
    border-radius: 4px;
    overflow-y: auto;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    height: 55px;
    min-height: 55px;
    padding: 12.182px;
    border-radius: 4.06066px;
    margin: 8px 0px;
    background-color: var(--grey-4);
    cursor: pointer;

    :hover {
        background-color: var(--grey-2);
    }

    h4 {
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-size: 14.2123px;
        line-height: 24px;
        color: var(--grey-0);
    }

    p {
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 12.182px;
        line-height: 22px;
        color: var(--grey-1);
    }
`;
