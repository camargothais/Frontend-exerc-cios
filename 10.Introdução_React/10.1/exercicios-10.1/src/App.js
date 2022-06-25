import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const tasks = ['Comprar ovo', 'Lavar tênis', 'Estudar conteúdo do dia', 'Fazer exercícios', 'Ir na academia']
function App() {
  return (
    tasks.map((task) => Task(task))
  );
}

export default App;
