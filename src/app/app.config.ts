import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {AuthServiceService} from "./service/auth-service.service";
import {provideClientHydration} from "@angular/platform-browser";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideToastr} from "ngx-toastr";
export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes), provideHttpClient(withFetch()), provideClientHydration(), [AuthServiceService],provideAnimations(), provideToastr()]
};
