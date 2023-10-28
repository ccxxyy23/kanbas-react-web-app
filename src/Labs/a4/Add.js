function Add({ a, b }) {
  //Add(obj),const a = obj.a
  // const {a, b} = obj;
  return (
    <div>
      <h2>Add</h2>
      <p>
        {a} + {b} = {a + b}
      </p>
    </div>
  );
}
export default Add;
