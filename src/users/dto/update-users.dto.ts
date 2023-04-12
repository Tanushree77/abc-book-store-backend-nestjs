/* eslint-disable prettier/prettier */

import { IsEmail } from "class-validator";

export class UpdateUsersDto {

    fullName: string;

  @IsEmail()
  email: string;

  password: string;

  role: number;

  mobile: string;

  address: string;

  country: string;

  city: string;
}
