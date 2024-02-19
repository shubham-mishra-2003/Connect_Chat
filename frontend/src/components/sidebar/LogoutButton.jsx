import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="w-fit px-5 py-1">
      <button
        title="logout"
        onClick={() => {
          alert(
            "Goodbye ! You've logged out of our app. We're sorry to see you go, but don't worry, it'll keep going without you for a bit. If you ever want to come back, remember, the app will be here waiting for you. See you later!"
          );
          logout();
        }}
      >
        {loading
          ? <span className="loading loading-spinner" />
          : <ion-icon name="log-out-outline" />}
      </button>
    </div>
  );
};

export default LogoutButton;
