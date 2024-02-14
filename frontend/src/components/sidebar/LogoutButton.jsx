const LogoutButton = () => {
  return (
    <div className="mt-auto flex justify-center">
      <ion-icon
        name="log-out-outline"
        onClick={() => {
          alert("You will be logged out !!");
        }}
      />
    </div>
  );
};

export default LogoutButton;
