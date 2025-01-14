
import accountImg from "../../../assets/account.svg"
import lockImg from "../../../assets/lock.svg";
import visibilityOn from "../../../assets/visibilityOn.svg";
import visibilityOff from "../../../assets/visibilityOff.svg";

import { useState } from "react";
import { FormContainer } from "./LoginCard.styled";
import { goToAcoountPage } from "../../../router/coordinator";
import { useNavigate } from "react-router-dom";




function FormSignUp() {
    const [visibility, SetVisibility] = useState(1)
    const [visibility2, SetVisibility2] = useState(1)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, SetConfimPassword] = useState("")
    const [isValid, setIsValid] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isUsernameValid, setIsUsernameValid] = useState(true)
    const [isNameValid, setIsNameValid] = useState(true)
    const [isPasswordValid, setIsPasswordValid] = useState(true)
    const [nome, setNome] = useState('')
    const navigate = useNavigate()

    const handleSingUp = () => {
        if(isValid){
            const nomeArr = nome.split(" ")
            const firstName =nomeArr[0]
            const middleName =nomeArr[1]
            const lastName =nomeArr[nomeArr.length-1]

            const newUser = {
                userId:`${username}${email}`,
                cpf:"",
                username,
                firstName,
                middleName,
                lastName,
                genero:"naoInfo",
                dayBirth:"",
                mounthBirth:"",
                yearBirth:"",
                email,
                password,
                telefone:"",
                adress:{
                    state:"",
                    city:"",
                    distric:"",
                    street:"",
                    cep:"",
                    number:"",
                    complement:""
        
                },
        
                purchasesHistoric:[],
                creditCards:[],
                favorites:[]
            }
            localStorage.setItem("user",JSON.stringify(newUser))
            goToAcoountPage(navigate)

        }

    }
    



    const validationForm = () => {
        setIsEmailValid(email.length > 4 && email.includes("@") && email.includes(".com") )
        setIsUsernameValid(username.length > 2)
        setIsNameValid(nome.length > 2)
        setIsPasswordValid(password === confirmPassword && password.length >= 6 && password.length <= 10)
        if ((email.length > 4 && email.includes("@") && email.includes(".com") ) && (username.length > 2) && (password === confirmPassword && password.length >= 6 && password.length <= 10) && (nome.length > 2)) {
            handleSingUp()
            setIsValid(true)
        }else {
            setIsValid(false)
        }

    }




    return (
        <FormContainer isEmailValid={isEmailValid} isPasswordValid={isPasswordValid} isUsernameValid={isUsernameValid} >
            <div>

                <h1>Cadastrar</h1>
                {isValid ||
                    <p>Dados invalidos</p>
                }
            </div>
            <div className="form-data">
            <label className="username">Nome</label>

                <div>
                    <img src={accountImg} alt="Account Icon" />
                    <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder="Nome" />
                  

                </div>
                <br/>
                <label className="username">Username</label>
                <div>
                    <img src={accountImg} alt="Account Icon" />
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
                  

                </div>
                {isUsernameValid || <span>minimo 4 caracteres</span>}
            </div>
            <div className="form-data">
                <label className="email">Email</label>
                <div>
                    <img src={accountImg} alt="Account Icon" />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />

                </div>
                {isEmailValid || <span>exemplo@dominio.com</span>}
            </div>
            <div className="form-data">
                <label className="password">Password</label>

                <div className="input-data">
                    <img src={lockImg} alt="password Icon" />

                    {
                        visibility === 1 ?
                            <div>

                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Digite sua senha" />
                                <img className="eye" onClick={() => SetVisibility(2)} src={visibilityOff} alt="Visibility Off icon" />
                            </div>


                            : <div>

                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Digite sua senha" />
                                <img className="eye" onClick={() => SetVisibility(1)} src={visibilityOn} alt="Visibility On icon" />
                            </div>

                    }
                </div>
                {isPasswordValid || <span>6-10 caracteres</span>}

            </div>
            <div className="form-data">
                <label className="password">Comfirmar Password</label>
                <div className="input-data">
                    <img src={lockImg} alt="password Icon" />

                    {
                        visibility2 === 1 ?
                            <div>

                                <input value={confirmPassword} onChange={(e) => SetConfimPassword(e.target.value)} type="password" placeholder="Digite sua senha" />
                                <img className="eye" onClick={() => SetVisibility2(2)} src={visibilityOff} alt="Visibility Off icon" />
                            </div>


                            : <div>

                                <input value={confirmPassword} onChange={(e) => SetConfimPassword(e.target.value)} type="text" placeholder="Digite sua senha" />
                                <img className="eye" onClick={() => SetVisibility2(1)} src={visibilityOn} alt="Visibility On icon" />
                            </div>

                    }
                </div>
                {isPasswordValid || <span>6-10 caracteres</span>}
            </div>


            <button type="button" onClick={validationForm}>Cadastrar</button>



        </FormContainer>
    )

}

export default FormSignUp
