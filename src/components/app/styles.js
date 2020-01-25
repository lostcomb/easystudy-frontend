import styled from "styled-components";
import {Box, FormControl} from "@material-ui/core";

export const Header = styled(Box)`
    background: linear-gradient(45deg, #2196F3 30%, #21CBF3 90%);
    height: 35vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled(FormControl)`
    display: flex;
    padding-top: 4px;
`;
