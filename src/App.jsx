import { useForm, FormProvider } from "react-hook-form";
import CustomInput from "./Components/CustomInput";

const App = () => {
  const methods = useForm({ mode: "all" });
  const onSubmit = (data) => {
    console.log(data);
  };
  const inputNames = [
    {
      inputName: "First Name",
      inputObjName: "firstName",
      type: "text",
    },
    {
      inputName: "Last Name",
      inputObjName: "lastName",
      type: "",
    },
    {
      inputName: "Email Address",
      inputObjName: "email",
      type: "text",
    },
    {
      inputName: "Password",
      inputObjName: "password",
      type: "password",
    },
  ];
  return (
    <div className="App">
      <main className="text-center mx-6 mt-20 lg:grid lg:grid-cols-2 lg:justify-center lg:items-center gap-6 lg:max-w-6xl ">
        <article className="text-neutralWhite lg:text-left">
          <h2 className="text-[1.6rem] px-8 lg:p-0 lg:text-5xl font-extrabold">
            Learn to code by watching others
          </h2>
          <p className="font-medium mt-5">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </article>

        {/* Form section */}
        <FormProvider {...methods}>
          <div>
            <div className="bg-Blue shadow-xl rounded-lg text-neutralWhite py-4 px-12 mt-12 mb-6">
              <span className="font-bold">Try it free 7 days </span>
              then $20/mo. thereafter
            </div>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="bg-neutralWhite rounded-lg p-6 grid gap-4 mb-14 shadow-xl"
            >
              {inputNames.map((data) => {
                return (
                  <CustomInput
                    inputName={data.inputName}
                    inputOjbName={data.inputObjName}
                    type={data.type}
                  />
                );
              })}
              <button className="shadow-xl uppercase text-neutralWhite bg-Green rounded-md py-4 font-medium">
                Claim your free trial
              </button>
              <p className="text-xs text-neutralGrayishBlue px-6 leading-5  ">
                By clicking the button, you are agreeing to our
                <span className="text-Red font-semibold">
                  {" "}
                  Terms and Services
                </span>
              </p>
            </form>
          </div>
        </FormProvider>
      </main>
    </div>
  );
};

export default App;
