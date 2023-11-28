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

  console.log(seatingPlan, "0123");

  //   if (seatingPlan == "Error") {
  //     console.log("Calling Create Seating Arrangement Pattern");
  //     seatingPlan = await fetchData();
  //   }

  seatingPlan = await fetchData();

  for (let i = 0; i < seatingPlan.length; i++) {
    for (let j = 0; j < seatingPlan[i].length; j++) {
      const item = seatingPlan[i][j];
      const column = item.location.split("-")[0];
      const row = item.location.split("-")[1];
      const col = item.location.split("-")[2];
      if (item.email == email) {
        finalLocation = true;
        return Response.json({
          name: item.name,
          seat: `${column}-${row}-${col}`,
        });
      }
    }
  }

  if (!finalLocation) {
    return Response.json({ name: "User Not Found", seat: null });
  }
}
