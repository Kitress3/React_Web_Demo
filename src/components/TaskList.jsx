export default function TaskList({ tasks, selectedId, onSelect }) {
  return (
    <section className="task-list">
      {tasks.map((task) => (
        <button
          key={task.id}
          type="button"
          className={`task-card ${selectedId === task.id ? 'task-card--active' : ''}`}
          onClick={() => onSelect(task)}
        >
          <div className="task-card__top">
            <span className="tag">{task.priority}</span>
            <span className="status-pill">{task.status}</span>
          </div>
          <h2>{task.title}</h2>
          <p>{task.summary}</p>
          <div className="task-card__footer">
            <span>Owner</span>
            <strong>{task.owner}</strong>
          </div>
        </button>
      ))}
    </section>
  );
}
