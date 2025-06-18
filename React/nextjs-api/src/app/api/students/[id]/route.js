import { NextResponse } from "next/server";
export async function PUT(req, { params }) {
    const studentId = params.id;//get URI params field;
    const body = req.json();
    return NextResponse.json({
        message: "Student is successfully updated",
        studentId,
        bodyData: body,
    });

}