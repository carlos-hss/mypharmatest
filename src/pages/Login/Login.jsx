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
        <SectionLogin>
            <img src={Logo} alt="" />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <DivInputs>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="E-mail *"
                        {...register("email")}
                        helperText={errors.email?.message}
                        error={!!errors.email?.message}
                        sx={{
                            height: "55px",
                        }}
                    />

                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Senha *"
                        type="password"
                        {...register("password")}
                        helperText={errors.password?.message}
                        error={!!errors.password?.message}
                        sx={{
                            height: "55px",
                        }}
                    />
                    <Link to="/cadastro" className="link">
                        Esqueceu a senha?
                    </Link>
                    <button type="submit">Login</button>
                </DivInputs>
            </Form>
        </SectionLogin>
    );
};

export default Login;
