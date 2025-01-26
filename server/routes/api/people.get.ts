import { usersTable } from '@/db/schema';
import { db } from "@/db/drizzle";

export default eventHandler(async (event) => {  
  console.log('GET /people');
  const session = await getUserSession(event)    
  console.log(session);
  try {
    const res = await requireUserSession(event)
    console.log(res);
      
    const users = await db.select().from(usersTable);
    return users;    
  } catch (err) {
    console.log(err);
    return [];
  }
})
