import React, { useState } from 'react';

const FormularioAluno = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [curso, setCurso] = useState('');
    const [consentimento, setConsentimento] = useState(false);
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nome || !email || !curso || !consentimento) {
            setMensagem('Por favor, preencha todos os campos e aceite os termos.');
            return;
        }
        setMensagem('Formulário enviado com sucesso!');
        // Aqui você pode adicionar lógica para enviar os dados para um servidor, por exemplo
        console.log({ nome, email, curso, consentimento });
    };

    return (
        <div>
            <h2>Formulário de Inscrição</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input 
                        type="text" 
                        id="nome" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="curso">Curso:</label>
                    <select 
                        id="curso" 
                        value={curso} 
                        onChange={(e) => setCurso(e.target.value)} 
                        required
                    >
                        <option value="">Selecione um curso</option>
                        <option value="Engenharia">Engenharia</option>
                        <option value="Medicina">Medicina</option>
                        <option value="Direito">Direito</option>
                        <option value="Administração">Administração</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input 
                            type="checkbox" 
                            checked={consentimento} 
                            onChange={(e) => setConsentimento(e.target.checked)} 
                            required 
                        />
                        Aceito os termos de uso e a política de privacidade.
                    </label>
                </div>
                <button type="submit">Enviar</button>
            </form>
            {mensagem && <p>{mensagem}</p>}
        </div>
    );
};

export default FormularioAluno;
