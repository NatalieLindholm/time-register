import { db } from './db';

export async function getData() {
  try {
    const data = await db.query('SELECT * FROM projects');
    console.log(data.rows); // Check the structure of the returned data
    return data.rows;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array in case of an error
  }
}

export async function getDataById(id:number) {
  try {
    const data = await db.query('SELECT * FROM projects WHERE id=$1', [id]);
    console.log(data.rows); // Check the structure of the returned data
    return data.rows[0];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function saveData(projectName:string) {
  try {
    await db.query("INSERT INTO projects(projectname) VALUES ($1)", [projectName])
    return 'Saved Successfully'
  } catch (error) {
    console.log(error);
    return 'Didnt save'
  }
}

export async function deleteData(id: string) {
  try {
    await db.query("DELETE FROM projects WHERE id = $1", [id])
    return 'Deleted'
  } catch (error) {
    console.log(error);
    return 'Didnt delete'
  }
}