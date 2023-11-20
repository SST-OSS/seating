"use server";
import Seating from "../models/Seating";
import { connectToDB } from "../mongoose";

export async function getSeatingPlan({ date, finalData }) {
  connectToDB();
  const seating = {
    date,
    seatingList: finalData,
  };

  try {
    const seatingPlan = await Seating.find({
      date: date,
    });

    if (seatingPlan.length > 0) {
      return seatingPlan;
    }
    return "Not Available";
  } catch (error) {
    throw error;
  }
}

export async function createSeatingPlan({ date, finalData }) {
  connectToDB();

  const seating = {
    date,
    seatingList: finalData,
  };

  try {
    const seatingDetails = await Seating.create(seating);
    return seatingDetails;
  } catch (error) {
    throw error;
  }
}

export async function getUserByEmail({ email, date }) {
  connectToDB();

  const seatingPlan = await Seating.find({
    date: date,
  });

  console.log(date);

  if (seatingPlan.length > 0) {
    // return seatingPlan;

    return seatingPlan;
  }
  return "Not Available";
}
