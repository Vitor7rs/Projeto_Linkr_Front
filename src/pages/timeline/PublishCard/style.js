import styled from "styled-components";

export const Container=styled.div`
	width: 40vw;
	height: 209px;
	background-color: #FFFFFF;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	padding: 10px 10px 10px 10px; 
	display:flex;
	justify-content:center;
`;

export const Div = styled.div`
	display: flex;
	flex-direction:column;
	justify-content:space-between;
	width: 80%;
	margin-left: 1vw;
`;

export const Title = styled.h1`
	font-family: 'Lato';
	font-style: normal;
	font-weight: 300;
	font-size: 20px;
	line-height: 20px;
	text-align: left;
	color: #707070;
`;

export const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction:column;
	align-items: flex-end;
	gap:5px;
`;

export const Inputs = styled.input`
	width: 100%;
	height: 30px;
	padding: 8px 8px 8px 8px;
	background-color: #EFEFEF;
	border-radius: 5px;
	border:none;
	&::placeholder{
		font-family: 'Lato';
		font-style: normal;
		font-weight: 300;
		font-size: 15px;
		line-height: 18px;
		color: #949494;
	}
`;

export const Text = styled.textarea`
	width: 100%;
	height: 66px;
	background-color: #EFEFEF;
	border-radius: 5px;
	border:none;
	padding: 8px 12px 8px 12px;
	&::placeholder{
		font-family: 'Lato';
		font-style: normal;
		font-weight: 300;
		font-size: 15px;
		text-align: start;
		color: #949494;
	}
`;

export const Buttons = styled.button`
	width: 112px;
	height: 31px;
	background-color: #1877F2;
	border-radius: 5px;
	border:none;
	font-weight: 700;
	font-size: 14px;
	color: #FFFFFF;
	&:disabled{
		border: 1px solid #999999;
		background-color: #cccccc;
		color: #666666;
	}
`;

export const Picture = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 26.5px;
	object-fit: cover;
`; 