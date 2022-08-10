import { Container, Picture, Div, Title, Form, Inputs, Text, Buttons } from "./style";
import imagePerfil from "./image.jpg";
import { useState } from 'react';
import axios from 'axios';

export default function PublishCard(){
	const [disabled, setDisabled] = useState(false);
	const [form, setForm] = useState({
		link: '',
		description: '',
	});

	function handleForm (e) {
		setForm({...form, [e.target.name]: e.target.value,});
	}

	function doSubmit (event) {
		event.preventDefault();
		if(disabled) return;
		setDisabled(true);
		const link = 'link/posts';
		setInterval(() => {
			setDisabled(false);
			setForm({
				link: '',
				description: '',
			});
		}, 1000);
		// const promisse = axios.post(link, {
		// 	link: form.link, description: form.description
		// });
		// promisse.then((response) => {
		// 	const {data} = response;
		// 	console.log(data);
		// 	setForm({
		// 		link: '',
		// 		description: '',
		// 	});
		// 	setDisabled(false);
		// }).catch(error => {
		// 	console.log(error);
		// 	alert("Houve um erro ao publicar seu link");
		// 	setDisabled(false);
		// });
	}

	return (
		<Container>
			<Picture src={imagePerfil} alt="foto de perfil" />
			<Div>
				<Title>What are you going to share today?</Title>
				<Form onSubmit={doSubmit}>
					<Inputs
						placeholder="http://..."
						name='link'
						value={form.link}
						onChange={handleForm}
						required
						disabled={disabled}
					/>
					<Text
						placeholder="Awesome article about #javascript"
						name='description'
						value={form.description}
						onChange={handleForm}
						disabled={disabled}
					/>
					<Buttons disabled={disabled}>{(disabled) ? 'Publishing' : 'Publish'}</Buttons>
				</Form>
			</Div>
		</Container>
	)
}