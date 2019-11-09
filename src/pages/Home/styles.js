import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #FFF;
    height: 100%;
    font-size: 3em;

    h2 {
        color: #7159c1;
        margin-bottom: 30px;
    }

    img {
        height: 190px;
        margin-bottom: 30px;
    }

    button {
        background: #7159c1;
		color: #fff;
		height: 70px;
		width: 270px;
		border: none;
        border-radius: 4px;
        font-size: 1em;
        box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.4);
        margin-top: 30px;
		
        &:hover {
			opacity: .9;
			transition: .2s;
		}
    }
`;
