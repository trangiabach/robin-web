import { ChangeEvent, useState } from "react";
import { LuSend } from "react-icons/lu";
import { ImSpinner3 } from "react-icons/im";
import classNames from "classnames";

export const EmailInput = () => {
  const [emailInput, setEmailInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSucess] = useState<boolean | undefined>(undefined);
  const disableSubmit = emailInput === "" || loading;

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailInput(event.target.value);
  };

  const sendEmail = async () => {
    setLoading(true);
    const response = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        email: emailInput,
      }),
    });
    setSucess(response.ok);
    setLoading(false);
  };

  const onSubmitEmail = () => {
    sendEmail();
  };

  return (
    <>
      <div className="flex items-center border-primary">
        <input
          type="text"
          placeholder="Your email..."
          className="bg-black robin-text text-lg px-3 py-3 flex-grow outline-none"
          onChange={onChangeEmail}
        />
        <div
          className={classNames(
            "p-4 text-primary border-l-primary hover:text-white hover:bg-primary hover:cursor-pointer transition-colors",
            disableSubmit && "pointer-events-none"
          )}
          onClick={onSubmitEmail}
        >
          {loading ? (
            <ImSpinner3 className="animate-spin" size={20} />
          ) : (
            <LuSend size={20} />
          )}
        </div>
      </div>
      {success && (
        <div className="text-sm mt-4">
          Your email was sucessfully recorded. We will keep you up-to-date on
          Robin AI!
        </div>
      )}
    </>
  );
};
