import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, DivInputs, SectionRegister } from "./Styled";
import { TextField } from "@mui/material";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postUserThunk } from "../../store/modules/login/thunks";
import Logo from "../../assets/MyPharmaLogo1.png";

const Register = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const formData = yup.object().shape({
        name: yup.string().required("Name required"),
        email: yup
            .string()
            .email("Digite um email válido")
            .required("Campo obrigatório"),
        password: yup
            .string()
            .min(6, "Digite uma senha forte")
            .required("Campo obrigatório"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formData),
    });

    const onSubmit = (object) => {
        dispatch(postUserThunk(object));
        history.push(`/login`);
    };

    return (
        <SectionRegister>
            <img src={Logo} alt="" />
            <Form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
            >
                <DivInputs>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Nome"
                        color="info"
                        required
                        {...register("name")}
                        error={!!errors.name?.message}
                        sx={{
                            height: "55px",
                        }}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="E-mail"
                        color="info"
                        required
                        {...register("email")}
                        error={!!errors.email?.message}
                        sx={{
                            height: "55px",
                        }}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Senha"
                        type="password"
                        color="info"
                        required
                        {...register("password")}
                        error={!!errors.password?.message}
                        sx={{
                            height: "55px",
                        }}
                    />

                    <Link to="/login">Já possui uma conta? Faça login.</Link>

                    <button type="submit">Register</button>
                </DivInputs>
            </Form>
        </SectionRegister>
    );
};

export default Register;
