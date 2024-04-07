import { getDataById } from "@/app/utils/handledb";

const TotalTime = async ({ projectId }: { projectId: number }) => {
  const data = await getDataById(projectId);
  console.log(data);

  return (
    <div className="ttBox">
      <p>
        Total Time:
        <p>{data.timespent}</p>
      </p>
    </div>
  );
};

export default TotalTime;
