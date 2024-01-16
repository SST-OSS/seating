"use server";
import Seating from "../models/Seating";
import { connectToDB } from "../mongoose";

export const getDate = () => {
  const date = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate();
  const monthAbbreviation = months[date.getMonth()];
  const year = date.getFullYear();

  const formattedDate = `${day}${monthAbbreviation}${year}`;
  return formattedDate;
};

export async function getSeatingPlan({ finalData }) {
  const date = getDate();
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

export async function createSeatingPlan({ finalData }) {
  connectToDB();
  const date = getDate();

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

export async function getUserByEmail({ email }) {
  connectToDB();
  const date = getDate();

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
