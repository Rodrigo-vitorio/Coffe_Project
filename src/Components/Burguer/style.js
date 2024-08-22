import styled from "styled-components";

export const Container = styled.div`
display: flex;
nav {
    width: 100%;
    height: 5em;
    background-color:red;
    display: flex;
    justify-content: flex-start;
    padding: 1em;
}

.burger-menu {
    height: 100%;
    width: 4em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    cursor: pointer;
}

.burger-bar {
    width: 4em;
    height: 0.5em;
    background-color: rgb(0, 183, 255);
    border-radius: 0.5em;
}

.menu {
    width: 50%;
    height: 100vh;
    background-color: red;
    position: absolute;
    top: 0;
    z-index: 2;
}

/* ------------- sliding menu ------------------ */
.hidden {
    display: none;
}

.visible {
    display: inherit;
}

/* ----- animations--------- */
/* clicked */
.burger-bar.clicked:nth-child(1){
    transform: rotate(45deg) translate(0.75em, 1.25em);
    transition: ease-out 0.5s;
}

.burger-bar.clicked:nth-child(2){
    transform: scale(0.1);
    transition: ease-out 0.5s;
}

.burger-bar.clicked:nth-child(3){
    transform: rotate(135deg) translate(-0.5em, 1em);
    transition: ease-out 0.5s;
}

/* unclicked */
.burger-bar.unclicked {
    transform: rotate(0) translate(0);
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
}
`

