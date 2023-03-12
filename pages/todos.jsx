import Head from "next/head";

const Todos = ({ _todos }) => {
  return (
    <div>
      <Head>
        <title>Todos</title>
      </Head>
      <div>
        {_todos?.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos");
  const _todos = await todos.json();
  return {
    props: { _todos },
  };
};

export default Todos;
