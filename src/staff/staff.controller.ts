import {
    Controller,
    Delete,
    Get,
    HttpStatus,
    Post,
    Put,
    Req,
    Res,
    UseGuards,
  } from "@nestjs/common";
  import { StaffService } from "./staff.service";
  import JwtAccessGuard from "src/auth/jwt-access-guard";
  
  @Controller("staff")
  export class StaffController {
    constructor(private staffService: StaffService) {}

    @Post("create")
    // @UseGuards(JwtAccessGuard)
    async create_staff(@Req() req, @Res() res) {
        console.log("i'm here");
      const response = await this.staffService.create_staff(req.body);
      return res.status(HttpStatus.OK).json({
        message: "Staff created successfully",
        staff: response,
      });
    }

    @Get("all")
    // @UseGuards(JwtAccessGuard)
    async get_all_staff(@Req() req, @Res() res) {
      const response = await this.staffService.get_all_staff();
      return res.status(HttpStatus.OK).json({
        message: "List of all staff",
       stafflist: response,
      });
    }

  @Put(":id")
  // @UseGuards(JwtAccessGuard)
  async update_user(@Req() req, @Res() res) {
    const response = await this.staffService.update_staff(
      req.params.id,
      req.body
    );
    return res.status(HttpStatus.OK).json({
      message: "Staff Updated",
      staff: response,
    });
  }

  @Delete(":id")
  // @UseGuards(JwtAccessGuard)
  async delete_user(@Req() req, @Res() res) {
    const response = await this.staffService.delete_staff(req.params.id);
    return res.status(HttpStatus.OK).json({
      message: "Staff Deleted",
      staff: response,
    });
  }

  }