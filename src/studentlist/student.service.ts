import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { StudentDocument } from "../schemas/student.schema";
import { oboattendancemail } from "src/views/oboattendancemail";
import { sendMail } from "src/utils/sendMail";
import { EmailDto } from 'src/auth/dto/email.dto';
import { CounterService } from "src/counter/counter.service";
const Handlebars = require("handlebars");

@Injectable()
export class StudentService {
  constructor(
    @InjectModel("Student") private readonly studentModel: Model<StudentDocument>,
    private counterService: CounterService
  ) {}
 
  async create_student(req_body) {
    const new_student = new this.studentModel();
    new_student._id = await this.counterService.get_next_sequence_value("student_id");
    new_student.first_name = req_body.first_name;
    new_student.last_name = req_body.last_name;
    new_student.email = req_body.email;
    new_student.phone_number = req_body.phone_number;
    new_student.batch = req_body.batch;
    new_student.date = req_body.date;
    return await new_student.save();
    // return "Student created successfully";
  }


  async get_all_students() {
    const student = await this.studentModel.find({});
    return student;
  }
  
  async absent_mail(id) {
    
    const student = await this.studentModel.findById(id);
    const s1=student.email;
    const s2=student.createdAt;
    const s3=student.first_name;

    const template = Handlebars.compile(oboattendancemail);
    const data = {
      Email: s1,
      Name:s3,
      Date:s2,
    };
    const htmlBody = template(data);
    try {
      const result = await sendMail(
        s1,
        "Student Attendance mail",
        "Login Credentials for Dim Institute",
        htmlBody
      );
      console.log("iam result", result);
    } catch (err) {
      console.log("iam err", err);
    }
    return 'success!check your mail attendance';
  }
}
