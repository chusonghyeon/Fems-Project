import "./App.css";
function App() {
  return (
    <div
      className="relative flex
     min-h-screen flex-col items-center justify-center py-12 px-4 font-bold sm:px-6 lg:px-8"
    >
      <img
        class="absolute -z-10 h-full w-full object-cover opacity-60 "
        src="https://www.sebomec.com/data/designImages/BUSI_PART_1_1504489039.jpg"
        alt="clean_roomimg"
      ></img>
      <div className="max-w-screen flex h-full w-full flex-col items-center justify-center space-y-2">
        <img
          class="z-1 mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h3 class="text-4xl">Cloud FEMS</h3>
        <span class="text-2xl">V 1.0</span>
      </div>
      <div>
        <form className="min-w-screen justify-item-center relative mt-12 flex w-full flex-col items-center space-y-1">
          <input
            type="text"
            class="w-100 h-10 w-96 rounded border-2 pr-12 text-gray-500"
            placeholder="아이디를 입력해주세요."
          ></input>
          <input
            placeholder="비밀번호를 입력해주세요."
            type="password"
            class="w-100 h-10 w-96 rounded border-2 pr-12"
          ></input>
          <label>
            <input class="mr-3" type="checkbox"></input>
            <span class="">아이디기억하기</span>
          </label>
          <button
            class="mg-x-4 w-96 rounded border-2 border-solid border-none bg-blue-500 text-6xl text-3xl text-white"
            type="submit"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
export default App;
