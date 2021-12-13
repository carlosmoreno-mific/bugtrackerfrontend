const projects = ({ projects }) => {
  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project: any) => (
        <div key={project.projectId}>
          {project.Name} - {project.Description}
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/api/projects");
  const projects = await res.json();
  return { props: { projects } };
};

export default projects;
