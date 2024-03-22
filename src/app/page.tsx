import { getData, saveData, deleteData } from "./utils/handledb";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import Link from "next/link";

export default async function Home() {
  const data = await getData();

  const create = async (FormData: FormData) => {
    "use server";
    const projectName = FormData.get("projectName") as string;
    const data = await saveData(projectName);
    console.log(data);
  };

  const deleteForm = async (FormData: FormData) => {
    "use server";
    console.log(FormData);

    const id = FormData.get("id") as string;
    const data = await deleteData(id);
    console.log(data);
  };

  return (
    <div className="body">
      <div className="sideBar">
        <form className="positioning" action={create}>
          <input
            className="input"
            type="text"
            name="projectName"
            placeholder="Project name"
          />
          <button className="create">
            <b>Create</b>
          </button>
        </form>
      </div>

      <div className="displayBox">
        {data.map((project) => (
          <div key={project.id} className="projectBox">
            <div>
              <p>
                <b>{project.projectname}</b>
              </p>
              <h3>Total time: 1h 23 minutes</h3>
            </div>

            <div className="bp">
              <form action={deleteForm}>
                <button>
                  <FaRegTrashAlt />
                </button>
                <input type="hidden" name="id" value={project.id} />
              </form>

              <Link href={"/projectdata/" + project.id}>
                <button>
                  <FaClock />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
