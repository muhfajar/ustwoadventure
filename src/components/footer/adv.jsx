import React from "react";
import { styled } from "linaria/react";

const ADVWrapper = styled.div`
    grid-column: 1/4;

    @media (max-width: 500px) {
        grid-column: 1/1;
    }
`;

const StyledLetter = styled.span`
    font-family: var(--futura);
    font-size: 2.46em;
    line-height: 1;
    letter-spacing: -3px;
    color: var(--piglet);
    display: inline-block;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    @media (max-width: 500px) {
        font-size: 2.15em;
    }

    @media (max-width: 350px) {
        display: none;
    }
`;

const LetterContainer = ({ children }) => {
    const moveLetter = e => {
        const x = 10 * Math.floor(Math.random() * 4) - 10;
        const y = 10 * Math.floor(Math.random() * 4) - 10;
        e.target.style.transform = `translate(${x}px, ${y}px)`;
    };

    return (
        <StyledLetter
            onMouseOver={moveLetter}
            onFocus={moveLetter}
            onClick={moveLetter}
        >
            {children}
        </StyledLetter>
    );
};

const ADV = () => (
    <ADVWrapper>
        <LetterContainer>A</LetterContainer>
        <LetterContainer>D</LetterContainer>
        <LetterContainer>V</LetterContainer>
    </ADVWrapper>
);

export default ADV;
