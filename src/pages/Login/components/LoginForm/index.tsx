import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { FormData, schema } from "./validate";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card placeholder={""} className="w-96 lg:w-96">
        <CardHeader
          placeholder={""}
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography placeholder={""} variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody placeholder={""} className="flex flex-col gap-4">
          <Input
            crossOrigin={"*"}
            label="User"
            size="lg"
            {...register("user")}
            error={!!errors.user}
          />
          <Input
            crossOrigin={"*"}
            label="Password"
            size="lg"
            {...register("password")}
            error={!!errors.password}
          />
        </CardBody>
        <CardFooter placeholder={""} className="pt-0">
          <Button placeholder={""} variant="gradient" fullWidth type="submit">
            Sign In
          </Button>
          
        </CardFooter>
      </Card>
    </form>
  );
};
