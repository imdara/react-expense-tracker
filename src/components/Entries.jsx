const Entries = ({ entries }) => {
  return (
    <div className="entries">
      <h2>Entries: </h2>
      {entries.map((entry, index) => (
        <div key={index} className="entry">
          <div>Name: {entry.name}</div>
          <div>Type: {entry.type}</div>
          <div>Amount: {entry.amount}</div>
        </div>
      ))}
    </div>
  );
};

export default Entries;
