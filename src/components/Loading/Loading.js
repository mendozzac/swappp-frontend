import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading-box">
      <h1 className="title title-loading">Cargando...</h1>
      <img className="logo" src="/img/swappp.svg" width="80%" alt="Cargando" />
    </div>
  );
};

export default Loading;
