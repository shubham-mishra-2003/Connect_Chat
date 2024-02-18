const LogoutButton = () => {
  return (
    <div className="w-fit px-5 py-1">
      <button onClick={() => document.getElementById("my_modal_3").showModal()}>
        <ion-icon name="log-out-outline" />
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="z-50 modal-box bg-gray-600 rounded-xl shadow-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-100">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello !</h3>
          <p className="py-4">
            Goodbye! You{"'"}ve logged out of our app. We{"'"}re sorry to see you go,
            but don{"'"}t worry, it{"'"}ll keep going without you for a bit. If you ever
            want to come back, remember, the app will be here waiting for you.
            See you later!
          </p>
        </div>
      </dialog>
    </div>
  );
};

export default LogoutButton;
