export declare const resetPasswordMail = "\n<!DOCTYPE html>\n<html>\n<head>\n   <title> Reset Password</title>\n</head>\n<style>\n    body{\n    background-color: white;\n    margin-top: 20%;\n    margin-left: 40%;\n    margin-right: 40%;\n}\n.card {\n    /* Add shadows to create the \"card\" effect */\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n  }\n  \n  /* On mouse-over, add a deeper shadow */\n  .card:hover {\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n  }\n  \n  /* Add some padding inside the card container */\n  .container {\n    padding: 2px 16px;\n  }\n  .button{\n     margin-left: 12%;\n     margin-top: 2%;\n     margin-bottom: 2%;\n     display: block;\n     height: 60px;\n     width: 75%;\n  border-radius: 25px;\n  outline: none;\n  border: none;\n  background-size: 100%;\n  font-size: 1.2rem;\n  color: #fff;\n  cursor: pointer;\n  transition: .5s;\n     background-color: darkviolet;\n     \n\n  }\n  @media screen and (max-width:1150px){\n      body{\n        margin-left: 35%;\n        margin-right: 35%;\n        margin-top: 25%;\n      }\n    } \n    @media screen and (max-width:950px){\n      body{\n        margin-left: 30%;\n        margin-right: 30%;\n        margin-top: 30%;\n      }\n    } \n    @media screen and (max-width:750px){\n      body{\n        margin-left: 25%;\n        margin-right: 25%;\n        margin-top: 40%;\n      }\n    } \n    @media screen and (max-width:550px){\n      body{\n        margin-left: 20%;\n        margin-right: 20%;\n        margin-top: 55%;\n      }\n    } \n    @media screen and (max-width:350px){\n      body{\n        margin-left: 10%;\n        margin-right: 10%;\n        margin-top: 85%;\n      }\n    } \n \n</style>\n<body>\n    <div class=\"card\">\n      <br/>\n        <h3 style=\"text-align: center;\">Reset your password</h3>\n        <hr/>\n        <div class=\"container\">\n         <p style=\"text-align: center;\">Need to reset your password? No problem! Just click the button below and you'll be on your way. If you did not make this request, please ignore this.</p>\n         <p align=\"center\"><a href={{url}} style=\"background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;\">Reset Password</a></p>\n         <br/>\n        </div>\n      </div>\n</body>\n</html>\n\n";