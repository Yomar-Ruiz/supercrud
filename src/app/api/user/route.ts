import {db} from "@/db"
import {users} from "@/db/schema"

export async function GET() {
    const allUsers = await db.select().from(users);

    return Response.json(allUsers)
}

export async function POST(request: Request){
    const body = await request.json()

    const newUser = await db
    .insert(users)
    .values({
        name: body.name,
        email: body.email
    })
    .returning()

    return Response.json(newUser)
}