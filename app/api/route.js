import { getUserByEmail } from "@/lib/actions/Seating";
import { fetchData } from "@/lib/components/SeatingList";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  //   const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "API-Key": process.env.DATA_API_KEY,
  //     },
  //   });
  const product = "Working...";
  console.log(email, "this is id");

  var seatingPlan = await fetchData();

  var finalLocation = false;

  while (seatingPlan === "Error") {
    console.log("Calling Create Seating Arrangement Pattern");
    seatingPlan = await fetchData();
  }

  for (let i = 0; i < seatingPlan.length; i++) {
    for (let j = 0; j < seatingPlan[i].length; j++) {
      const item = seatingPlan[i][j];
      if (item.email == email) {
        finalLocation = true;
        return Response.json({
          name: item.name,
          seat: item.location,
        });
      }
    }
  }

  if (!finalLocation) {
    return Response.json({ name: "User Not Found", seat: null });
  }
}
