import logo from "./logo.svg";
import "./App.css";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

const recommandName = async () => {
  try {
    const favorite = document.querySelector('input[name="favorite"]');
    const age = document.querySelector('input[name="age"]');
    const personality = document.querySelector('input[name="personality"]');

    const params = {
      messages: [
        {
          content: `내 취미는 ${favorite.value} 입니다.`,
        },
        {
          content: `내 나이는 ${age.value} 입니다.`,
        },
        {
          content: `내 성격은 ${personality.value} 입니다.`,
        },
        {
          content: `내게 맞는 영어이름 추천해줘`,
        },
      ],
    };

    const url = `http://localhost:5077/toaster/name`;
    // const url = `https://api.nametoaster.com/toaster/name`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    const result = await response.json();

    console.log("Success", result);
  } catch (error) {
    console.error("Error", error);
  }
};

function App() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-700 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              나에게 맞는 영어 이름
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              내가 좋아하는 것은?
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <input
                name="favorite"
                type="text"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="축구, 여행, 요리, 드라이브"
              />
            </div>
            <p className="mt-4 text-lg leading-8 text-gray-300">나의 성격은?</p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <input
                id="personality"
                name="personality"
                type="text"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="침착함, 내성적, 가끔 예민"
              />
            </div>
            <p className="mt-4 text-lg leading-8 text-gray-300">내 나이는?</p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <input
                id="age"
                name="age"
                type="text"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="낭랑 18세"
              />
              <button
                type="button"
                onClick={recommandName}
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                제출하기
              </button>
            </div>
          </div>
          <div className="max-w-xl">
            <div className="flex flex-col items-start">
              <dt className="mt-4 font-semibold text-white">Jordan</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Jordan is funny. funny is funny
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <dt className="mt-4 font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Officia excepteur ullamco ut sint duis proident non adipisicing.
                Voluptate incididunt anim.
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
