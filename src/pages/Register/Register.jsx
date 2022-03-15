import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, DivInputs, SectionRegister } from "./Styled";
import { TextField } from "@mui/material";
import { useHistory, Link } from "react-router-dom";
import Logo from "../../assets/MyPharmaLogo1.png";

const Register = () => {
    const history = useHistory();

    const formData = yup.object().shape({
        name: yup.string().required("Name required"),
        email: yup
            .string()
            .email("Type a valid email")
            .required("E-mail required"),
        password: yup
            .string()
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Type a strong password"
            )
            .required("Password required"),

        passwordConfirm: yup
            .string()
            .required("Password confirmation required")
            .oneOf([yup.ref("password")], "Passwords are differents"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formData),
    });

    const onSubmit = (object) => {
        history.push(`/dashboard/${object.name}`);
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
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Confirme sua senha"
                        type="password"
                        color="info"
                        required
                        {...register("passwordConfirm")}
                        error={!!errors.passwordConfirm?.message}
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
