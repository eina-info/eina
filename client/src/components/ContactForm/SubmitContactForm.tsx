import * as React from "react";

export interface SubmitContactFormProps {
  className?: string;
}

/**
 * @name SubmitContactForm
 * @description Submit form where user inputs information.
 */
export const SubmitContactForm = (props: SubmitContactFormProps) => {
  const { className } = props;

  return (
    <div className="inline">
      <form className="w-fill">
        <input
          placeholder="Email"
          className="bg-transparent border border-black rounded-2xl p-2 w-64"
        ></input>
        <br />
        <input
          placeholder="Message"
          className="bg-transparent border border-black rounded-2xl p-2 w-64"
        ></input>
      </form>
    </div>
  );
};
