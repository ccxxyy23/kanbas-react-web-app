function ClickEvent() {
  const hello = () => {
    alert("Hello World!");
  };
  const good = () => {
    alert("Life is Good!");
  };
  return (
    <div>
      <h2>Click Event</h2>
      {/* don't include () */}
      <button onClick={hello}>Click Hello 1 </button>
      {/* this one can pass argument */}
      <button onClick={() => hello()}>Click Hello 2 </button>
      <button
        //   multiple line, don't forget {}
        onClick={() => {
          hello();
          good();
        }}
      >
        Click Hello 3
      </button>
    </div>
  );
}
export default ClickEvent;
