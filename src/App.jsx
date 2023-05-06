import { useForm, FormProvider } from "react-hook-form";
import Input from "./Components/Input";

const App = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="App">
      <main className="text-center mx-6 mt-20">
        <article className="text-neutralWhite">
          <h2 className="text-[1.6rem] px-8 font-extrabold">
            Learn to code by watching others
          </h2>
          <p className="font-medium mt-5">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </article>
        <div className="bg-Blue rounded-lg text-neutralWhite py-4 px-12 mt-12 mb-6">
          <span className="font-bold">Try it free 7 days </span>
          then $20/mo. thereafter
        </div>

        {/* Form section */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-neutralWhite rounded-lg p-6 grid gap-4 mb-14"
        >
          <div className="relative">
            {errors.firstName ? (
              <img
                className="absolute right-4 top-4"
                src={require("./images/icon-error.svg").default}
                alt="error"
              />
            ) : (
              ""
            )}

            <input
              className="input"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "First Name cannot be empty",
                },
              })}
              type="text"
              placeholder="First Name"
            />
            <p className="error-message">
              {errors.firstName ? errors.firstName?.message : ""}
            </p>
          </div>

          <div>
            <input
              className="input"
              {...register("lastName", {
                required: {
                  value: true,
                  message: "Last Name cannot be empty",
                },
              })}
              type="text"
              placeholder="Last Name"
            />
            <p className="error-message">
              {errors.lastName ? errors.lastName?.message : ""}
            </p>
          </div>

          <div>
            <input
              className="input"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email cannot be empty",
                },
              })}
              type="text"
              placeholder="Email Address"
            />
            <p className="error-message">
              {errors.email ? errors.email?.message : ""}
            </p>
          </div>

          <div>
            <input
              className="input"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password cannot be empty",
                },
              })}
              type="text"
              placeholder="Password"
            />
            <p className="error-message">
              {errors.password ? errors.password?.message : ""}
            </p>
          </div>
          <button className="uppercase text-neutralWhite bg-Green rounded-md py-4 font-medium">
            Claim your free trial
          </button>
          <p className="text-xs text-neutralGrayishBlue px-6 leading-5  ">
            By clicking the button, you are agreeing to our
            <span className="text-Red font-semibold"> Terms and Services</span>
          </p>
        </form>
      </main>
    </div>
  );
};

export default App;
