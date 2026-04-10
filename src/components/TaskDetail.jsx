export default function TaskDetail({ task }) {
  if (!task) {
    return (
      <aside className="detail-panel detail-panel--empty">
        <h2>Select a task</h2>
        <p>Choose a card on the left to view its full details.</p>
      </aside>
    );
  }

  return (
    <aside className="detail-panel">
      <div className="detail-panel__meta">
        <span className="tag">{task.priority}</span>
        <span className="status-pill">{task.status}</span>
      </div>
      <h2>{task.title}</h2>
      <p className="detail-panel__summary">{task.summary}</p>

      <div className="detail-panel__info">
        <div>
          <span className="label">Owner</span>
          <strong>{task.owner}</strong>
        </div>
        <div>
          <span className="label">Task ID</span>
          <strong>#{task.id}</strong>
        </div>
      </div>

      <div className="detail-panel__content">
        <h3>Description</h3>
        <p>{task.description}</p>
      </div>
    </aside>
  );
}
