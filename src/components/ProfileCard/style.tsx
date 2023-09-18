import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    padding: 12px 8px;
    border-radius: 4px;

    div {
        font-family: 24px;

        :hover {
            color: darkblue;
        }
    }
`;