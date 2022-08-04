const loadingSpinner = "/images/loading.gif";

const Loading = () => {
  return (
    <div className="loading">
      <img src={loadingSpinner} alt="loading" />
      <h2>Wczytywanie...</h2>
    </div>
  );
};

export default Loading;
