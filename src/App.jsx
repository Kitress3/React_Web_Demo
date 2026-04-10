import { useMemo, useState } from 'react';

import { tasks } from './data';
import TaskDetail from './components/TaskDetail';
import TaskList from './components/TaskList';
import Toolbar from './components/Toolbar';

export default function App() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('All');
  const [selectedTask, setSelectedTask] = useState(tasks[0]);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesQuery =
        task.title.toLowerCase().includes(query.toLowerCase()) ||
        task.summary.toLowerCase().includes(query.toLowerCase());
      const matchesStatus = status === 'All' || task.status === status;

      return matchesQuery && matchesStatus;
    });
  }, [query, status]);

  const visibleSelectedTask = filteredTasks.find((task) => task.id === selectedTask?.id) ?? null;

  return (
    <div className="app-shell">
      <Toolbar
        query={query}
        onQueryChange={setQuery}
        status={status}
        onStatusChange={setStatus}
        total={filteredTasks.length}
      />

      <main className="board-layout">
        <TaskList
          tasks={filteredTasks}
          selectedId={visibleSelectedTask?.id}
          onSelect={setSelectedTask}
        />
        <TaskDetail task={visibleSelectedTask} />
      </main>
    </div>
  );
}
