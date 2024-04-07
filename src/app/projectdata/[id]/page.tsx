import { getData, getDataById } from "@/app/utils/handledb";
import { FaArrowLeft } from "react-icons/fa";
import Timer from "@/components/Timer";
import Link from "next/link";
import TotalTime from "@/components/TotalTime";

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
      <div className="sideBar2">
        <div className="positioning">
          <div>
            <Timer projectId={params.id} />
          </div>

          <Link href={"../"}>
            <button className="back">
              <FaArrowLeft />
            </button>
          </Link>
        </div>
      </div>
      <div className="projectDisplayBox">
        <div>
          <h2>{data.projectname}</h2>
        </div>
        {/* in seconds */}
        <TotalTime projectId={params.id} />
      </div>
    </div>
  );
}
