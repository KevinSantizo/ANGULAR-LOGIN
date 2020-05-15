import { Injectable }       from '@angular/core';
import { auth }             from 'firebase/app/';
import { User }             from 'firebase';
import { AngularFireAuth }  from '@angular/fire/auth';
import { relative } from 'path';



@Injectable()
export class AuthService {

    public user : User;

    constructor (public afAuth: AngularFireAuth, ){}

    async login(email:string, password:string){
        const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
        return result;
    }
    register(){}
    async logout(){
        await this.afAuth.signOut();
    }
    getCurrentUser(){}

}