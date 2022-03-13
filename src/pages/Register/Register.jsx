import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, DivInputs, SectionRegister } from "./Styled";
import { TextField } from "@mui/material";
import { useHistory } from "react-router-dom";
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
            <Form onSubmit={handleSubmit(onSubmit)}>
                <DivInputs>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Name"
                        {...register("name")}
                        helperText={errors.name?.message}
                        error={!!errors.name?.message}
                        sx={{
                            height: "55px",
                        }}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="E-mail"
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
                        label="Password"
                        type="password"
                        {...register("password")}
                        helperText={errors.password?.message}
                        error={!!errors.password?.message}
                        sx={{
                            height: "55px",
                        }}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Confirm Password"
                        type="password"
                        {...register("passwordConfirm")}
                        helperText={errors.passwordConfirm?.message}
                        error={!!errors.passwordConfirm?.message}
                        sx={{
                            height: "55px",
                        }}
                    />
                    <button type="submit">Register</button>
                </DivInputs>
            </Form>
        </SectionRegister>
    );
};

export default Register;
