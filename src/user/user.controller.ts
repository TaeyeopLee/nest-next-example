import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Render,
} from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("/user")
export class UserController {
  constructor(private service: UserService) {}

  @Render("user")
  @Get()
  public index() {
    return { list: this.service.getall() };
  }

}
