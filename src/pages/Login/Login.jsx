import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, DivInputs, SectionLogin } from "./Styled";
import { TextField } from "@mui/material";
import { useHistory, Link } from "react-router-dom";
import Logo from "../../assets/MyPharmaLogo1.png";

const Login = () => {
    const history = useHistory();

    const formData = yup.object().shape({
        email: yup.string().email("Digite um email válido").required(),
        password: yup
            .string()
            .min(6, "Digite uma senha de no mínimo 6 caracteres"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formData),
    });

    const onSubmit = (object) => {
        history.push(`/dashboard`);
    };

    return (
        <SectionLogin>
            <Link to="/">
                <img src={Logo} alt="" />
            </Link>
            <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <DivInputs>
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
                    <p>
                        <Link to="/cadastro" className="link">
                            Não tem uma conta?
                        </Link>
                    </p>
                    <button type="submit">Login</button>
                </DivInputs>
            </Form>
        </SectionLogin>
    );
};

export default Login;
