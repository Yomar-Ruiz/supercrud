import {db} from "@/db"
import {users} from "@/db/schema"
import {eq} from "drizzle-orm"

export async function PUT(
    request: Request,
    {params}: {params: Promise<{id: string}>}
) {
    const {id} = await params
    const body = await request.json()

    const updateUser = await db.update(users).set({name: body.name, email: body.email}).where(eq(users.id, Number(id))).returning();

    return Response.json(updateUser)
}

export async function DELETE(
    request: Request,
    {params}: {params: Promise<{id: string}>}
) {
    const { id } = await params

    const deleteUser = await db.delete(users).where(eq(users.id, Number(id))).returning()

    return Response.json(deleteUser)

}