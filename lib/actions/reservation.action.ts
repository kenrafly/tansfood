"use server";

import Reservation from "../models/reservation.model";
import { connectToDB } from "../mongoose";

interface ReservationData {
  id: string;
  username: string;
  name: string;
  email: string;
  date: string; // could also be Date if you store as ISO date
  time: string;
  numberOfPeople: number;
}

export async function createReservation(reservationData: ReservationData) {
  try {
    connectToDB();

    const newReservation = new Reservation(reservationData);
    await newReservation.save();

    return JSON.parse(JSON.stringify(newReservation));
  } catch (error: any) {
    throw new Error(`Failed to create reservation: ${error.message}`);
  }
}
