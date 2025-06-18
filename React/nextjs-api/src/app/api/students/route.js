import { NextResponse, nextResponse } from 'next/server';
const StudentData=[
    {
        id:1,
        name:"Su Su",
        age:17,
        address:"Hlaing",
        major:"Compute Science"
    },
    {
        id:2,
        name:"Thu Thu",
        age:14,
        address:"Hlaing",
        major:"Compute Science"
    },
    {
        id:3,
        name:"Hla Hla",
        age:14,
        address:"Hlaing",
        major:"Compute Science"
    },
]
export async function GET() {
    return NextResponse.json( StudentData );
}
export async function POST(req){
    const body=await req.json();
    console.log(body)
    return NextResponse.json({message:"Student is successfully created.",  bodyData: body, });

}