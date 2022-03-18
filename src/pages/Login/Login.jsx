import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, DivInputs, SectionLogin } from "./Styled";
import { TextField } from "@mui/material";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Logo from "../../assets/MyPharmaLogo1.png";
import { setVerifyThunk } from "../../store/modules/verify/thunks";

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const listUsers = useSelector((state) => state.listUsers);

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
        const verify = listUsers.some(
            (user) =>
                user.email === object.email && user.password === object.password
        );
        if (verify) {
            const user = listUsers.find((user) => object.email === user.email);
            localStorage.setItem("@token", user.UUID);
            dispatch(setVerifyThunk(true));
            toast.success("Login efetuado!");
            history.push(`/`);
        }
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
