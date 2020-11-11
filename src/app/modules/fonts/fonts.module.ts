import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import {
  faExclamationTriangle,
  faVideo,
  faIdCard,
  faExclamation,
  faHandPointRight,
  faCaretRight,
  faRedo,
  faBan,
  faCheck,
  faCircle,
  faForward,
  faSave,
  faEye,
  faCog,
  faUserSlash,
  faUsers as fasUsers,
  faDesktop,
  faCalendarAlt,
  faUserCheck,
  faBoxOpen,
  faUserCircle as fasUserCircle,
  faUserTag,
  faMapMarkerAlt,
  faPencilAlt,
  faTimesCircle,
  faInfo,
  faInfoCircle,
  faLock as fasLock,
  faTimes as fasTimes,
  faSort, faSortUp, faSortDown,
  faUserTimes,
  faTasks,
  faPause,
  faUser,
  faSync,
  faEdit,
  faTrash,
  faTrashAlt,
  faCubes,
  faPlus,
  faChevronLeft,
  faFolder
} from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [],
  exports: [
    FontAwesomeModule,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ]
})
export class FontsModule {
  constructor(library: FaIconLibrary) {
    // Font Awesome icon library
    library.addIcons(
      faExclamationTriangle,
      faVideo,
      faIdCard,
      faExclamation,
      faHandPointRight,
      faCaretRight,
      faRedo,
      faBan,
      faCheck,
      fasTimes,
      faSort, faSortUp, faSortDown,
      faForward,
      faSave,
      faEye,
      faCircle,
      faCog,
      faUserSlash,
      fasUsers,
      faDesktop,
      faCalendarAlt,
      faUserCheck,
      faBoxOpen,
      fasUserCircle,
      faUserTag,
      faMapMarkerAlt,
      faPencilAlt,
      faTimesCircle,
      faInfo,
      faUserTimes,
      fasLock,
      faTasks,
      faPause,
      faUser,
      faInfoCircle,
      faSync,
      faEdit,
      faTrash,
      faTrashAlt,
      faPencilAlt,
      faCubes,
      faPlus,
      faChevronLeft,
      faFolder
    );
  }
}
