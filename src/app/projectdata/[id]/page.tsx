import { getData, getDataById } from "@/app/utils/handledb";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import Timer from "@/components/Timer";

type PageByIdProps = {
  params: {
    id: number;
  };
};

export default async function pageById({ params }: PageByIdProps) {
  const projectId = params.id;
  const data = await getDataById(projectId);
  return (
    <div className="body">
      <div className="sideBar">
        <div className="positioning">
          <div>
            <Timer></Timer>
          </div>
        </div>

        <div className="ttBox">
          <p>
            <b>Total Time:</b>

            <p>
              <b>2 hours 45 minutes</b>
            </p>
          </p>
        </div>
      </div>

      <div className="projectDisplayBox">
        <div>
          <p>
            <b>{data.projectname}</b>
          </p>
        </div>
      </div>
    </div>
  );
}
