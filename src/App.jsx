import React from "react";
import emailjs from "emailjs-com";

function App() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rcvvgsr",
        "template_e0e36rg",
        e.target,
        "84NLUr2-1oK_DHNfs"
      )
      .then(
        (result) => {
          console.log(`${result} ارسال شد`);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <div className="flex justify-center items-center">
      <div class="w-full max-w-xs mt-32">
        <form
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
          onSubmit={sendEmail}
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="name"
              placeholder="Username"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="email"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              text
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="text"
              type="text"
              name="message"
              placeholder="text"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
