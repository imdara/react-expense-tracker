import Entry from "./Entry";

const Entries = ({ entries, setEntries, setBalance, balance }) => {
  return (
    <div className="entries">
      <h2>Entries: </h2>
      {entries.map((entry, index) => (
        <Entry
          key={index}
          entry={entry}
          entries={entries}
          setEntries={setEntries}
          setBalance={setBalance}
          balance={balance}
        />
      ))}
    </div>
  );
};

export default Entries;
