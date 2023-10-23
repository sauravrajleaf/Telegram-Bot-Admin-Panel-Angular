// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import {
//   FacebookLoginProvider,
//   GoogleLoginProvider,
//   SocialAuthServiceConfig,
//   SocialLoginModule,
// } from 'angularx-social-login';
// import { LoginComponent } from './login/login.component';

// @NgModule({
//   declarations: [LoginComponent],
//   providers: [
//     {
//       provide: 'SocialAuthServiceConfig',
//       useValue: {
//         autoLogin: false,
//         providers: [
//           {
//             id: GoogleLoginProvider.PROVIDER_ID,
//             provider: new GoogleLoginProvider(
//               '38861619212-ofhm58i3nr7ps19fq1m0s697amodfpb3.apps.googleusercontent.com'
//             ),
//           },
//         ],
//         onError: (err) => {
//           console.error(err);
//         },
//       } as SocialAuthServiceConfig,
//     },
//   ],
//   exports: [LoginComponent, SocialLoginModule],
//   imports: [SocialLoginModule],
// })
// export class GoogleAuth {}
