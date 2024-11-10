import RegisterAuthForm from "@/components/RegisterAuthForm";
import Image from "next/image";

//TODO: Add your own high res screen shot

const Register = () => {
  return (
    <div className="grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0 ">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[500px] ">
        <RegisterAuthForm />
      </div>
      <div className="h-full">
        <div className="h-fill auth-asset">
          <Image
            alt="Login Image"
            // className="h-full w-full object-cover "
            className="items-end dark:brightness-[0.6] m-0 p-0  "
            height="190"
            // src="https://img.freepik.com/free-photo/sunset-silhouettes-trees-mountains-generative-ai_169016-29371.jpg"
            src="/icons/auth-image.svg"
            style={{
              aspectRatio: "1440/1440",
              objectFit: "fill",
            }}
            width="700"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
