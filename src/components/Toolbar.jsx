export default function Toolbar({
  query,
  onQueryChange,
  status,
  onStatusChange,
  total
}) {
  return (
    <section className="toolbar">
      <div>
        <p className="eyebrow">React Demo</p>
        <h1>Task Board</h1>
        <p className="toolbar__description">
          A small React demo focused on component composition and state-driven UI.
        </p>
      </div>

      <div className="toolbar__controls">
        <label className="field">
          <span>Search</span>
          <input
            type="text"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search tasks"
          />
        </label>

        <label className="field">
          <span>Status</span>
          <select value={status} onChange={(event) => onStatusChange(event.target.value)}>
            <option value="All">All</option>
            <option value="Planned">Planned</option>
            <option value="In Progress">In Progress</option>
            <option value="Review">Review</option>
          </select>
        </label>

        <div className="toolbar__count">
          <strong>{total}</strong>
          <span>visible tasks</span>
        </div>
      </div>
    </section>
  );
}
