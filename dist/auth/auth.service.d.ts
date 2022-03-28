import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { UserDocument } from 'src/schemas/user.schema';
import { EmailDto } from './dto/email.dto';
import { UserLoginCredentialsDto } from './dto/userLoginCredentials.dto';
export declare class AuthService {
    private readonly userModel;
    private jwtService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService);
    signIn(userLoginCredentialsDto: UserLoginCredentialsDto): Promise<(string | UserDocument)[]>;
    validateUserPassword(userLoginCredentialsDto: UserLoginCredentialsDto): Promise<UserDocument>;
    forgotPassword(emailDto: EmailDto): Promise<string>;
    validateResetPasswordToken(token: any): Promise<boolean>;
    resetPassword(token: any, body: any): Promise<boolean>;
    renewAccessToken(req: any): Promise<{
        accessToken: string;
    }>;
    private hashPassword;
}
