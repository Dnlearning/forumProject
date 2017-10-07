import { UserService } from './../services/user.service';

export function emailTaken(userService: UserService) {
    
    return control => new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(!control.value) return null;
            userService.checkEmailExist((control.value).trim()).subscribe(data => {
                if(data.success) {
                  resolve(null);
                } else {
                  resolve({ emailTaken : true});
                }
              });
        },2000);
    });
}