import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { Injectable, InjectionToken } from "@angular/core";

export const LOG_SERVICE = new InjectionToken("logger");
export const LOG_LEVEL =new InjectionToken("log_level");

export enum LogLevel{
    DEBUG, INFO, ERROR
}

@Injectable()
export class LogService{
    minimumLevel: LogLevel = LogLevel.INFO;

    logInfoMessage ( message : string){
        return this.logMessage( LogLevel.INFO, message);
    }
    logDebugMessage( message: string){
        return this.logMessage(LogLevel.DEBUG, message);
    }
    logErrorMessage( message: string){
        return this.logMessage(LogLevel.ERROR, message);
    }
    logMessage( level: LogLevel, message: string){
        if( level >= this.minimumLevel ){
            console.log(`L23: Message (${LogLevel[level]}): ${message}`);
        }
    }
}

@Injectable()
export class SpecialLogService extends LogService{

    constructor(){
        super()
        this.minimumLevel = LogLevel.DEBUG;
    }

    logMessage(level: LogLevel, message: string) {
        console.log("L39 " + this.minimumLevel );
        console.log("L40 " + level );
        if (level >= this.minimumLevel) {
            console.log(`L40 Special Message (${LogLevel[level]}): ${message}`);
        }
    }
}